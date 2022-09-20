import Sidebar from "../../navbar/Sidebar";
import Navigation from "../../navbar/Navigation";
import AddJournal from ".AddJournal";

export const AddJournalPage = () => {
  return (
    <div class="dashboard">
      <div class="left">
        <Sidebar />
        <Navigation />
        <AddJournal />
      </div>
    </div>
  );
};

export default AddJournalPage;
