import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import parse from 'html-react-parser';
import dataBase from '../../../../config/firebase';
import { useEffect } from "react";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";

export const ViewJournalPage = (props) => {

  const location = useLocation();

  const data = location.state?.data;

  const timeStampToString = (timeStamp) => {
    const date = new Date(timeStamp * 1000);
    return date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
  };

  const image_container = {
    width: "100%",
    position: "reletive",
    textAlign: "center",
  };

  const image = {
    opacity: "0.6",
    borderRedius: "5px",
    objectFit: "none",
    maxHeight: "500px",
    maxWidth: "800px !important",
    width: "100%",
  };

  const information = {
    position: "absolute",
    top: "50%",
    // color: "#ffffff",
    cursor: "pointer",
    zIndex: "1",
    transform: "translate(0,-50%)",
    left: "50%",
  };

  const title = {
    fontSize: "4em",
    color: "#00020e",
    fontWeight: "lighter",
    textShadow: "-1px -1px 0 #212121 , 1px -1px 0 #212121 , -1px 1px 0 #212121 , 1px  1px 0 #212121 ,",
  };

  const date = {
    textAlign: "center",
    fontSize: "2em",
    // fontSize: "15px",
    fontWeight: "bold",
    color: "#e8e8e8",
  };

  const content = {
    padding: "1.5em",
    fontSize:"14px",
    // marginLeft:"0",
    width: "100%",
    textAlign: "left",
  }

  return (
    <section class="container-outer">
      <div class="container-inner">
        <div className="heading-container">
          <h1 className="heading">Journal </h1>
        </div>
        <div>
          <div style={image_container}>
            <img style={image}
              src={data.featureImg}
              alt="My Image"
            />
            <div style={information}>
              <h1 style={title}>
                {data.title}
              </h1>
              <div style={date}>
                {timeStampToString(data.createDate.seconds)}
              </div>
            </div>
          </div>
          <div style={content}>
            {parse(data.content)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewJournalPage;