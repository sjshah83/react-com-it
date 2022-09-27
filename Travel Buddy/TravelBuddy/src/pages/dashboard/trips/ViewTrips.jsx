import { useNavigate } from "react-router-dom";

export const Trips = () => {

    const navigate = useNavigate();

    const handleSubmit  =()=>{
        navigate("/dashboard/addTrip");
    }

    return (
        <div>
            <h1>Trips</h1>
            <button onClick={handleSubmit} > Add Trip</button>
        </div>
    );
}

export default Trips;