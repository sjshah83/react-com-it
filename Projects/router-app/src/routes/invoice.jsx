import { useParams } from "react-router-dom";

const Invoice= ()=> {
    let params = useParams();
    return <h2 style={{ padding : "1em" }}>
        Invoice : {params.invoiceId}
    </h2>;
}

export default Invoice;