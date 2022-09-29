import { Card, CardBody, CardImg } from "reactstrap";

const ViewTripImageThumbnail = (props) => {

    const tripCard = {
        width: "300px",
        borderRadius: "10px",
        alignItems: "center",
        margin: "15px",
    };

    return (
        <Card style={tripCard} className="my-2">
            <CardBody>
                <CardImg
                    style={{width:"100%",height:"100%",padding:".5em"}}
                    src={props.image}
                    alt="Trip Image URL"
                    onError={(e) => { e.target.onerror = null; e.target.src = "http://localhost:3000/image-not-found.jpg" }} />
            </CardBody>
        </Card>
    );
}

export default ViewTripImageThumbnail;