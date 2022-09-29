import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import parse from 'html-react-parser';
import dataBase from '../../../../config/firebase';
// import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";

export const ViewJournalPage = (props) => {

  /* COde To Get State Object From Location */
  
  // const location = useLocation();
  // const data = location.state?.data;
  
  const params = useParams();
  const [journals, setJournals] = useState([]);
  const [isLoaded,setIsLoaded] = useState(false);

  useEffect(() => {
    getJournalById(params.id);
    if(journals.featureImg==='undefined'){

    }
  }, []);

  

  const getJournalById = async (id) => {

    dataBase.collection('journals')
      .doc(id)
      .get()
      .then(doc => {
          if(doc.exists){
            setJournals(doc.data());
            setIsLoaded(true);
          }
      })
    // const docRef = doc(dataBase, "journals", id);
    // const docSnap = await getDoc(docRef);
    // docSnap.data();
    // setJournals(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
  }

  const timeStampToString = (timeStamp) => {
    const date = new Date(timeStamp * 1000);
    return date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
  };


  const image_container = {
    width: "100%",
    height:"100%",
    alignItems:"center",
  };

  const image = {
    position: "reletive",
    opacity: "0.6",
    backgroundSize: "cover",
    backgroundPosition: "center",
    maxHeight: "500px",
    maxWidth: "800px",
    width: "100%",
    borderRadius: "20px",
    border : "3px solid",
    borderRadius: "20px",
  };

  const information = {
    position: "absolute",
    top: "35%",
    left: "57%",
    transform: "translate(0, 0)",
    cursor: "pointer",
    zIndex: "1",
  };

  const title = {
    fontSize: "4em",
    color: "#00020e",
    fontWeight: "lighter",
    textShadow: "-1px -1px 0 #212121 , 1px -1px 0 #212121 , -1px 1px 0 #212121 , 1px  1px 0 #212121 ,",
  };

  const date = {
    textAlign: "center",
    fontSize: "2em",
    fontWeight: "bold",
    color: "#e8e8e8",
  };

  const content = {
    padding: "1.5em",
    // marginLeft:"0",
    width: "100%",
    textAlign: "left",
  }

  if(!isLoaded){
    return(
      <div> Loading...</div>
    );
  }else{

    return (
      
      <section class="container-outer">
        <div className="container-inner">
          <div className="heading-container"  style={{ marginBottom:"2em"}}>
            <h1 className="heading">Journal {journals.title}</h1>
          </div>
          <div>
            <div style={image_container}>
              <img style={image}
                src={journals.featureImg}
                alt="My Image"
                // onError={(e)=>{e.target.onerror = null; e.target.src="http://localhost:3000/image-not-found.jpg"}}
              />
              <div style={information}>
                <h1 style={title}>
                  {journals.title}
                </h1>
                <div style={date}>
                  {timeStampToString(journals.createDate.seconds)}
                </div>
              </div>
            </div>
            <div style={content}>
              {parse(journals.content)}
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default ViewJournalPage;