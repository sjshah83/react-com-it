import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "../../../node_modules/react-quill/dist/quill.snow.css";
import "../../css/EditJournal.css";

export const EditJournalForm = () => {
  const { state } = useLocation();
  const [body, setBody] = useState("");

  const getColor = (prefix) => {
    switch (state.color) {
      case 1: {
        if (prefix === "text") {
          return "indigo-text";
        } else if (prefix === "border") {
          return "indigo-b";
        } else {
          return "indigo-bg";
        }
      }
      case 2:
        if (prefix === "text") {
          return "blue-text";
        } else if (prefix === "border") {
          return "blue-b";
        } else {
          return "blue-bg";
        }
      case 3:
        if (prefix === "text") {
          return "red-text";
        } else if (prefix === "border") {
          return "red-b";
        } else {
          return "red-bg";
        }
      case 4:
        if (prefix === "text") {
          return "green-text";
        } else if (prefix === "border") {
          return "green-b";
        } else {
          return "green-bg";
        }
      case 5:
        if (prefix === "text") {
          return "orange-text";
        } else if (prefix === "border") {
          return "orange-b";
        } else {
          return "orange-bg";
        }
      case 6:
        if (prefix === "text") {
          return "purple-text";
        } else if (prefix === "border") {
          return "purple-b";
        } else {
          return "purple-bg";
        }
      case 7:
        if (prefix === "text") {
          return "yellow-text";
        } else if (prefix === "border") {
          return "yellow-b";
        } else {
          return "yellow-bg";
        }
      default:
        if (prefix === "text") {
          return "indigo-text";
        } else if (prefix === "border") {
          return "indigo-b";
        } else {
          return "indigo-bg";
        }
    }
  };

  const handleBody = (e) => {
    setBody(e);
  };

  const handleSubmit = () => {};

  return (
    <div className={"outer-container " + getColor("text")}>
      <div className="heading-container">
        <h1 className={"heading " + getColor("border")}>{state.title}</h1>
        <div style={{ display: "flex" }}>
          <button
            className={"save-button " + getColor("hover:bg")}
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
      <div className="quill-container">
        <ReactQuill
          className="quillTextBox"
          placeholder="Enter journal entry here...."
          modules={EditJournalForm.modules}
          formats={EditJournalForm.format}
          value={body}
          onChange={handleBody}
        />
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