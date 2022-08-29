import Sidebar from "../dashboard/navbar/Sidebar"
import Navigation from "../dashboard/navbar/Navigation"

export const Dashboard = () => {
    return (
        <div class="dashboard">
        <div class="left">
          <Sidebar />
          <Navigation />
        </div>
      </div>
    );
};

export default Dashboard; 