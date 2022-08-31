
import './App.css';
import { Link , Outlet} from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Book-keeper</h1>
      <nav style={{
        borderBottom: "double 2px",
        paddingBottom: "1em",
      }}>
        <Link to="/invoices">Invoices</Link> | {" "}
        <Link to="/expenses">Expensis</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;