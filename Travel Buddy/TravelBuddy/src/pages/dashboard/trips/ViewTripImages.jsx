import dataBase from '../../../config/firebase'
// import { Carousel } from '3d-react-carousal';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import ViewTripImageThumbnail from './ViewTripImageThumbnail';


const ViewTripImages = () => {

    const params = useParams();
    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // console.log("inside Use Effect", params.id);
        getTripImagesByTripId(params.id);
    }, []);

    const getTripImagesByTripId = async (tripId) => {
        const q = query(collection(dataBase, 'tripImageCollection'), where("tripId", "==", tripId));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data().imgURL);
            setImages((prevState) => [...prevState, doc.data().imgURL]);
        })
        if (setImages.length > 0) {
            setIsLoaded(true);
        }
    }

    const mainContainer = {
        display: "flex",
        justifyContent: "center",
        flexFlow: "row wrap",
        margin: "6em",
    };

    if (!isLoaded) {
        return (
            <div> Loading...</div>
        );
    } else {

        return (

            <section class="container-outer">
                <div className="container-inner">
                    <div className="heading-container" style={{ marginBottom: "2em" }}>
                        <h1 className="heading">Trip Photos</h1>
                    </div>
                </div>

                <div style={mainContainer}>
                    {
                        images.map((image) => {
                            // console.log("Journals : ",journal)
                            return (
                                <ViewTripImageThumbnail image={image} />
                            );
                        })
                    }


                </div>
            </section>
        )
    }
}

export default ViewTripImages;