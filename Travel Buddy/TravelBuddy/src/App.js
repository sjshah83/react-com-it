
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import Login from "./pages/userAccount/login";
import Dashboard from "./pages/dashboard";
import { Trips } from "./pages/dashboard/trips";
import { Journals } from "./pages/dashboard/journals";
import { Recomondations } from "./pages/dashboard/recomondations";
import Register from "./pages/userAccount/register";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="trips" element={<Trips />} />
        <Route path="journals" element={<Journals />} />
        <Route path="recomondations" element={<Recomondations />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1em" }}>
              <h1>There's nothing here!</h1>
            </main>
          }
        />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;