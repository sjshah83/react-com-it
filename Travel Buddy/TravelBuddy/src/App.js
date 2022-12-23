
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import Login from "./pages/userAccount/login";
import Dashboard from "./pages/dashboard";
import ViewTrips from "./pages/dashboard/trips/ViewTrips";
import { Journals } from "./pages/dashboard/journal/Journals";
import { Recomondations } from "./pages/dashboard/Recomondations";
import Register from "./pages/userAccount/register";
import AddJournalForm from "./pages/dashboard/journal/add-journal/AddJournal";
import EditJournalForm from "./pages/dashboard/journal/edit-journal/EditJournal";
import ViewJournalPage from "./pages/dashboard/journal/view-journal/ViewJournal";
import AddTripForm from "./pages/dashboard/trips/AddTrip";
import DashboardMenu from "./pages/dashboard/DashboadMenu";
import ViewTripImages from "./pages/dashboard/trips/ViewTripImages";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="menu" element={<DashboardMenu />} />
        <Route path="trips" element={<ViewTrips />} />
        <Route path="trips/:id" element={<ViewTripImages/>} />
        <Route path="journals" element={<Journals/>}/>
        <Route path="journal/:id" element={<ViewJournalPage authed={true} />} />
        <Route path="recomondations" element={<Recomondations />} />
        <Route path="addJournal" element={<AddJournalForm />} />
        <Route path="editJournal" element={<EditJournalForm />} />
        <Route path="addTrip" element={<AddTripForm />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1em" }}>
              <h1>No matching page found!</h1>
            </main>
          }
        />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;