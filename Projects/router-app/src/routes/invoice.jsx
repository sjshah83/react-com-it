import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

const Invoice = () => {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    
    return <h2 style={{ padding: "1em" }}>
        <main style={{ padding: "1rem" }}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
        </main>
    </h2>;
}

export default Invoice;