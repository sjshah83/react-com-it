import { Card, CardBody, CardImg, CardLink, CardSubtitle, CardTitle } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const { Navigate, useNavigate } = require("react-router-dom");


const JournalThumbnail = (props) => {

    let navigate = useNavigate();

    const sendData = (journalId) => {
        navigate();
    }

    const journalCard = {
        // border:"3px solid red",
        width: "300px",
        borderRadius: "10px",
        alignItems:"center",
        margin:"10em 15px",
    };    
    
    const journalImg = {
        maxHeight: "180px",
    };

    console.log(props.journal.id);
    return (
        
        <Card style={journalCard}>
            <CardBody>
                <CardTitle style={{ color: `${props.journal.theme}` }} tag="h5">
                    {props.journal.title}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {props.journal.userId}
                </CardSubtitle>
            </CardBody>
            <CardImg style={journalImg} src="https://picsum.photos/300/200" alt="Journal Image"/>
            <CardBody>
                <CardLink href="#">
                    Card Link
                </CardLink>
            </CardBody>
        </Card>

    );
}

export default JournalThumbnail;