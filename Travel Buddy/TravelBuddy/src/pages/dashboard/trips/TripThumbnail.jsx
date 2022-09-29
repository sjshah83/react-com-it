import { Card, CardBody, CardImg, CardSubtitle, CardTitle, CardHeader, CardFooter } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useState } from "react";

const TripThumbnail = (props) => {

    const [isHoverLink, setIsHoverLink] = useState(false);
    const [isHoverImg, setIsHoverImg] = useState(false);

    const tripCard = {
        width: "300px",
        borderRadius: "10px",
        alignItems: "center",
        margin: "15px",
    };

    const tripHeader = {
        width: '100%',
        textAlign: 'center',
        textTransform: "uppercase",
        textDecoration: "none",
    }

    const tripImg = {
        marginTop: "2em",
        marginBottom: "2em",
        maxHeight: "180px",
    };
    const tripImgHover = {
        // marginTop: "2em",
        // marginBottom: "2em",
        // maxHeight: "180px",
        border:"1px solid #232b2b"
    };

    const linkStyle = {
        color: "#232b2b "
    }
    const linkStyleHover = {
        color: "#808080"
    }

    const timeStampToString = (timeStamp) => {
        const date = new Date(timeStamp * 1000);
        return date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
    };

    return (
        <Card style={tripCard} className="my-2">
            <CardHeader style={tripHeader}>
                <CardTitle tag="h2">
                    <Link
                        onMouseEnter={() => setIsHoverLink(true)}
                        onMouseLeave={() => setIsHoverLink(false)}
                        style={{
                            ...linkStyle,
                            ...(isHoverLink ? linkStyle : linkStyleHover)
                        }}
                        to={'/dashboard/trips/' + props.trip.id}
                        state={{ data: props.trip }}
                    >
                        {props.trip.title}
                    </Link>
                </CardTitle>
            </CardHeader>
            <CardBody>
                <Link to={'/dashboard/trips/' + props.trip.id} state={{ data: props.trip }}>
                    <CardImg
                        onMouseEnter={() => setIsHoverImg(true)}
                        onMouseLeave={() => setIsHoverImg(false)}
                        style={{
                            ...tripImg,
                            ...(isHoverImg ? tripImgHover : tripImg)
                        }}
                        // style={tripImg}
                        src={props.trip.coverImg}
                        alt="Cover Page"
                        onError={(e) => { e.target.onerror = null; e.target.src = "http://localhost:3000/image-not-found.jpg" }} />
                </Link>
            </CardBody>
            <CardFooter style={{ width: '100%', textAlign: 'center', }}>
                <CardSubtitle>
                    {timeStampToString(props.trip.createDate.seconds)}
                </CardSubtitle>

            </CardFooter>


        </Card>
    );
}

export default TripThumbnail;