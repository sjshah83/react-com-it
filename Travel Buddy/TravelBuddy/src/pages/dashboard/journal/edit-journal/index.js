import Sidebar from "../../components/navbar/Sidebar";
import Navigation from "../../components/navbar/Navigation";
import EditJournal from "./EditJournal";

export const EditJournalPage = () => {
  return (
    <div class="dashboard">
      <div class="left">
        <Sidebar />
        <Navigation />
        <EditJournal />
      </div>
    </div>
  );
};

export default EditJournalPage;
