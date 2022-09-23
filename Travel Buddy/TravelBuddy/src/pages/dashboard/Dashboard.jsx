import Sidebar from '../navbar/Sidebar';
import Navigation from '../navbar/Navigation';
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div class="dashboard">
      <div class="left">
        <Sidebar />
        <Navigation />
      </div>
      <div style={{height:'100%', width:'100%',  overflow:"scroll"}}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard; 