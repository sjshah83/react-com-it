import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../../css/Dashboard.css';

const Navigation = () => {
  return (
    <div class="navigation">
      <div class="wrapper2">
        <div class="logo">
          <img alt="Logo" src={require("../../images/travelbuddy.png")} />
        </div>
        <Link to="/dashboard/addJournal">
          <button class="compose">
            Add Journal
            <span class="plus">
              <img alt="add" src="https://i.ibb.co/v1HxGWj/add-1.png" />
            </span>
          </button>
        </Link>
        <div class="list-title">YOUR CHOICES</div>
        <div class="list">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'activeLink' : 'inactive')}
                to="/dashboard/trips">TRIPS</NavLink>
            </li>
            <li>
              <Link to="/dashboard/journals">JOURNALS</Link>
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
