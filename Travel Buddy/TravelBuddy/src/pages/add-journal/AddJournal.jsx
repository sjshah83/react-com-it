import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/AddJournal.css";

export const AddJournalForm = () => {

  const inputFile = useRef(null);
  const [colorId, setColorId] = useState(1);
  const [privacySetting, setPrivacySetting] = useState("shared");
  const [publishJournal, setPublishJournal] = useState("live");
  const [titleImagePath, setTitleImagePath] = useState(
    require("../../images/imageUploadIcon.png")
  );

  let navigate = useNavigate();

  const importTitleImage = () => {
    inputFile.current.click();
  };

  const journalTitle = useRef(null);

  const handleImageUpload = (event) => {
    setTitleImagePath(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = () => {
    navigate("/dashboard/editJournal", {
      state: {
        color: colorId,
        privacy: privacySetting,
        publish: publishJournal,
        titleImagePath: titleImagePath,
        title: journalTitle.current.value,
      },
    });
  };

  return (
    <section class="container-outer">
      <div class="container-inner">
        <div className="heading-container">
          <h1 className="heading">Add Journal</h1>
        </div>
        <div class="form-container">
          <input
            type="file"
            id="file"
            ref={inputFile}
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          <div className="title-image" onClick={importTitleImage}>
            <img src={titleImagePath} className="h-96" />
          </div>

          <div class="form-inner-container">
            <div class="title-container">
              <input
                type="text"
                ref={journalTitle}
                id="default-search"
                class="title-input-box"
                placeholder="ADD TITLE HERE"
                required
              />
            </div>
            <div class="privacy-container">
              <span class="privacy-inner-container">
                <span className="privacy-label">THIS JOURNAL IS</span>
                <span className="privacy-buttons-container">
                  <button
                    className={
                      "shared" === privacySetting
                        ? "privacy-buttons-selected"
                        : "privacy-buttons"
                    }
                    onClick={() => setPrivacySetting("shared")}
                  >
                    SHARED
                  </button>
                  <button
                    className={
                      "private" === privacySetting
                        ? "privacy-buttons-selected"
                        : "privacy-buttons"
                    }
                    onClick={() => setPrivacySetting("private")}
                  >
                    PRIVATE
                  </button>
                </span>
              </span>
            </div>

            <p className="privacy-information">
              Private journals allow only you to access the view and add new
              entries.
            </p>
            <div className="color-buttons-container">
              <div style={{ display: "flex" }}>
                <span className="color-label">Color</span>
                <span>
                  <button
                    className={
                      1 === colorId
                        ? "selected color-button color-indigo"
                        : "color-button color-indigo"
                    }
                    onClick={() => setColorId(1)}
                  ></button>
                  <button
                    className={
                      2 === colorId
                        ? "selected color-button color-blue"
                        : "color-button color-blue"
                    }
                    onClick={() => setColorId(2)}
                  ></button>
                  <button
                    className={
                      3 === colorId
                        ? "selected color-button color-red"
                        : "color-button color-red"
                    }
                    onClick={() => setColorId(3)}
                  ></button>
                  <button
                    className={
                      4 === colorId
                        ? "selected color-button color-green"
                        : "color-button color-green"
                    }
                    onClick={() => setColorId(4)}
                  ></button>
                  <button
                    className={
                      5 === colorId
                        ? "selected color-button color-orange"
                        : "color-button color-orange"
                    }
                    onClick={() => setColorId(5)}
                  ></button>
                  <button
                    className={
                      6 === colorId
                        ? "selected color-button color-purple"
                        : "color-button color-purple"
                    }
                    onClick={() => setColorId(6)}
                  ></button>
                  <button
                    className={
                      7 === colorId
                        ? "selected color-button color-yellow"
                        : "color-button color-yellow"
                    }
                    onClick={() => setColorId(7)}
                  ></button>
                </span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <button className="submit-button" onClick={handleSubmit}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddJournalForm;
