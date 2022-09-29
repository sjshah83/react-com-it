
import { useState, useEffect } from 'react';
import dataBase from '../../../config/firebase'
import JournalThumbnail from './JournalThumbnail';
import "../../../css/AddJournal.css";

export const Journals = () => {

    const [isLoaded, setLoaded] = useState(false);
    const [journals, setJournals] = useState([]);

    useEffect(() => {
        getJournals();
    }, []);

    const getJournals = async () => {
        const response = dataBase.collection('journals');
        const data = await response.get();
        setJournals(data.docs.map((doc) => ({ id: doc.id ,...doc.data()})))
    }

    const jContainer = {
        display: "flex",
        justifyContent: "center",  
        flexFlow: "row wrap",
        margin : "10em" ,
        // border:"3px solid green", 
    }; 

    return (
        <section class="container-outer">
        <div class="container-inner">
          <div className="heading-container">
            <h1 className="heading">Browse Journals</h1>
          </div>
        </div>
        <div style={jContainer}>
            {
                journals.map((journal) => {
                    // console.log("Journals : ",journal)
                    return (
                        <JournalThumbnail journal={journal} />
                    );
                })
            }
        </div>
        </section>
    )
}

export default Journals;