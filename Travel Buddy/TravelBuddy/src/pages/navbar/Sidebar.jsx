import React from "react";
import '../../css/Dashboard.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="menu">
          <img src="https://i.ibb.co/B4Dn7CT/menu.png" />
        </div>
        <div className="items">
          <img src="https://i.ibb.co/L8D5T60/light.png" />
          <img src="https://i.ibb.co/zmDbMVZ/diamond.png" />
          <img src="https://i.ibb.co/zGtDpcp/map.png" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
