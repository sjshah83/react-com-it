import { Card, CardBody, CardImg, CardLink, CardSubtitle, CardTitle } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const { useNavigate, Link } = require("react-router-dom");

export function timeStampToString(timeStamp) {
    const date = new Date(timeStamp * 1000);
    return date.getFullYear() + '.' + (date.getMonth + 1) + '.' + date.getDate();
};

const JournalThumbnail = (props) => {


    const journalCard = {
        // border:"3px solid red",
        width: "300px",
        borderRadius: "10px",
        alignItems: "center",
        margin: "15px",
    };

    const journalImg = {
        maxHeight: "180px",
    };

    return (

        <Card style={journalCard}>
            <CardBody>
                <CardTitle style={{ color: `${props.journal.theme}` }} tag="h5">
                    <Link to={'/dashboard/journal/' + props.journal.id} state={{ data: props.journal }}>
                        {props.journal.title}
                    </Link>
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {props.journal.userId}
                </CardSubtitle>
            </CardBody>
            <Link to={'/dashboard/journal/' + props.journal.id} state={{ data: props.journal }}>
                <CardImg style={journalImg} src={props.journal.featureImg} alt="Journal Image" />
            </Link>
            <CardBody>
                <CardLink href="#">
                    Trip Name
                </CardLink>
            </CardBody>
        </Card>

    );
}

export default JournalThumbnail;