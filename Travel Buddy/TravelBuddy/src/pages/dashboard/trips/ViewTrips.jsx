import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dataBase from "../../../config/firebase";
import TripThumbnail from "./TripThumbnail";

export const Trips = () => {

    const navigate = useNavigate();

    const [trips, setTrips] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // console.log("inside useEffect");
        getTrips()
    }, []);

    const getTrips = async () => {
        const tripCol = dataBase.collection('trips');
        const records = await tripCol.get();
        setTrips(records.docs.map((rec) =>
            ({ id: rec.id, ...rec.data() })
        ));
        setIsLoaded(true);
    };

    const handleSubmit = () => {
        navigate("/dashboard/addTrip");
    }

    const mainContainer = {
        display: "flex",
        justifyContent: "center",
        flexFlow: "row wrap",
        margin: "6em",
    };

    const containerInner = {
        width: "100%",
        padding: "2em 15em",
        // border: "2px solid green",
        justifyContent: "center",
        letterSpacing: "0.1em",
        lineHeight: "2.5",
    }

    return (
        <div class="container-outer">
            {/* <div className="container-inner"> */}
            <div style={containerInner}>
                <div className="heading-container" style={{ verticalAlign: "sub" }}>
                    <h1 className="heading" >Trips</h1>
                    <button style={{ width: "10em", fontSize: "2em" }} className="submit-button" onClick={handleSubmit} >
                        ADD TRIP
                    </button>
                </div>
            </div>
            <div style={mainContainer}>
                {
                    trips.map((trip) => {
                        return (
                            <TripThumbnail trip={trip} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Trips;