import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../../css/Dashboard.css';

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="wrapper2">
        <div className="logo">
          <img alt="Logo" src={require("../../images/travelbuddy.png")} />
        </div>
        <Link to="/dashboard/addJournal">
          <button className="compose">
            Add Journal
            <span className="plus">
              <img alt="add" src="https://i.ibb.co/v1HxGWj/add-1.png" />
            </span>
          </button>
        </Link>
        <div className="list-title">YOUR CHOICES</div>
        <div className="list">
          <ul>
            <li>
            <Link to="/dashboard/journals">JOURNALS</Link>
            </li>
            <li>
            <NavLink
                className={({ isActive }) => (isActive ? 'activeLink' : 'inactive')}
                to="/dashboard/trips">TRIPS</NavLink>
              
            </li>
            <li>
              <Link to="/dashboard/recomondations">RECOMMENDATIONS</Link>
            </li>
            <li>
              <Link to="/dashboard/settings">SETTINGS</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
