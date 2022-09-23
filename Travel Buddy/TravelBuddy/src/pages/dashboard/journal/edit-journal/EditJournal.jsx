import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "../../../../../node_modules/react-quill/dist/quill.snow.css";
import "../../../../css/EditJournal.css";
import { collection, addDoc } from "firebase/firestore"
import dataBase from '../../../../config/firebase'
import getColor, { setMyTheme } from '../JournalHelper'

export const EditJournalForm = () => {

  const { state } = useLocation();
  const navigate = useNavigate();
  const [content, setContent] = useState("");


  const [userId, setUserId] = useState("Shital Shah");
  const [theme, setTheme] = useState(setMyTheme(state.color));
  const [title, setTitle] = useState(state.title);
  const [isPublish, setIsPublish] = useState(state.isPublish);
  const [createDate, setCreateDate] = useState(new Date());
  const [featureImage, setFeatureImage] = useState(state.featureImage);


  const handleBody = (e) => {
    console.log(e, "Content");
    setContent(e);
  };

  const createJournal = async () => {
    const journalRef = collection(dataBase, 'journals');
    await addDoc(journalRef, {
      title: title,
      isPublish: isPublish,
      theme: theme,
      createDate: createDate,
      featureImg: featureImage,
      content: content,
      userId: userId,
      modifiedDate: new Date(),
    })
  }

  const handleSubmit = () => {
    createJournal();
    navigate("/dashboard");
  };

  const containerOuter = {
    font: "inherit",
    color: "rgb(107, 114, 128)",
    width: "100%",
    maxWidth: "1000px",
    margin: "3em auto auto auto",
    alignItems:"center", 
    // marginTop:"3em",
  }

  const mainHeadingContainer = {
    width: "100%",
    // display: "flex",
    alignItems: "center",
  }

  const mainHeading = {
    borderBottom: "2px solid rgb(107, 114, 128)",
    fontColor: "#111827",
    textAlign: "center",
    padding: "15px",
  };

  return (
    <div style={containerOuter}>
      <div style={mainHeadingContainer}>
        <h1 style={mainHeading}>Add Journal - Add Content (2/2)</h1>
      </div>
      <div className={"outer-container " + getColor("text", theme)}>
        <div className="heading-container">
          <h1 className={"heading " + getColor("border", theme)} style={{textAlign: "center"}}>{title}</h1>
          <div style={{ display: "flex" }}>
            <button
              className={"save-button " + getColor("hover:bg", theme)}
              onClick={handleSubmit}
            >
              SAVE
            </button>
          </div>
        </div>
        <div className="quill-container">
          <ReactQuill
            className="quillTextBox"
            placeholder="Enter journal entry here...."
            modules={EditJournalForm.modules}
            formats={EditJournalForm.format}
            value={content}
            onChange={handleBody}
          />
        </div>
      </div>
    </div>
  );
};

EditJournalForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
    ["code-block"],
  ],
};

EditJournalForm.format = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "code-block",
];

export default EditJournalForm;