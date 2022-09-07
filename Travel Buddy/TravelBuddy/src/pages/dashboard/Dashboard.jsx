import Sidebar from "../dashboard/navbar/Sidebar"
import Navigation from "../dashboard/navbar/Navigation"
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div class="dashboard">
      <div class="left">
        <Sidebar />
        <Navigation />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard; 