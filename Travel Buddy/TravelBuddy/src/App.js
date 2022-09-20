
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import Login from "./pages/userAccount/login";
import Dashboard from "./pages/dashboard";
import { Trips } from "./pages/dashboard/trips/trips";
import { Journals } from "./pages/dashboard/journal/Journals";
import { Recomondations } from "./pages/dashboard/Recomondations";
import Register from "./pages/userAccount/register";
import AddJournalForm from "./pages/dashboard/journal/add-journal/AddJournal";
import EditJournalForm from "./pages/dashboard/journal/edit-journal/EditJournal";
import ViewJournalPage from "./pages/dashboard/journal/view-journal/ViewJournal";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="trips" element={<Trips />} />
        <Route path="journals" element={<Journals/>}/>
        <Route path="journal/:id" element={<ViewJournalPage authed={true} />} />
        <Route path="recomondations" element={<Recomondations />} />
        <Route path="addJournal" element={<AddJournalForm />} />
        <Route path="editJournal" element={<EditJournalForm />} />
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