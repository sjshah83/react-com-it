import React from "react";
import "../../../css/Dashboard.css";

const Navigation = () => {
  return (
    <div class="navigation">
      <div class="wrapper2">
        <div class="logo">
          <img src={require("../../../images/travelbuddy.png")} />
        </div>
        <button class="compose">
          Add Journal
          <span class="plus">
            <img src="https://i.ibb.co/v1HxGWj/add-1.png" />
          </span>
        </button>
        <div class="list-title">YOUR CHOICES</div>
        <div class="list">
          <ul>
            <li>
              <a href="#">TRIPS</a>
            </li>
            <li>
              <a href="#">JOURNALS</a>
            </li>
            <li>
              <a href="#">RECOMMENDATION</a>
            </li>
            <li>
              <a href="#">SETTINGS</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
