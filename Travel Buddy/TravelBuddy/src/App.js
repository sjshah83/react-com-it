
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Home />}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="*" element={<Home />}/>
    </Routes>
  );
}

export default App;