import { useParams, useNavigate, useLocation } from "react-router-dom";
import { deleteInvoice, getInvoice } from "../data";

const Invoice = () => {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    let location = useLocation();
    let navigate = useNavigate();

    return (
        <main style={{ padding: "1em" }}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
            <p>
                <button
                    onClick={() => {
                        deleteInvoice(invoice.number);
                        navigate("/invoices" + location.search);
                        alert("Search term :"+location.search);
                    }}>
                    Delete
                </button>
            </p>
        </main>
    );
}

export default Invoice;