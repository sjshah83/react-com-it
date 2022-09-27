import React from "react";
import { useState } from "react";
import { storage } from "../../../config/firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { useRef } from "react";

// createDate:new Date(),
// coverImg:'',
// isPublish:false,
// userId:'Shital Shah',

const AddTripForm = () => {

    const inputFile = useRef(null);
    const inputFileMultiple = useRef(null);
    // const title = useRef(null);

    const [inputImg, setInputImg] = useState(require("../../../images/imageUploadIcon.png"));
    const [title, setTitle] = useState('');
    const [coverImg, setCoverImg] = useState(null);
    const [coverImgURL, setCoverImgURL] = useState('');
    const [tripImgs, setTripImgs] = useState([]);
    const [tripImgURLs, setTripImgURLs] = useState([]);
    const [isPublish, setIsPublish] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [createDate, setCreateDate] = useState(new Date());
    const [userId, setUserId] = useState('Shital Shah');
    const [progress, setProgress] = useState(0);
    const [multiImgProgress, setMultiImgProgress] = useState(0);

    const importTitleImage = () => {
        inputFile.current.click();
    };

    const importMultipleImage = () => {
        inputFileMultiple.current.click();
    };

    const handleChange = e => {
        console.log(e.target.files[0], "HandleCHange : --- >");
        if (e.target.files[0]) {
            setInputImg(URL.createObjectURL(e.target.files[0]));
            setCoverImg(e.target.files[0]);
        }
    }

    const handleChangeMultiple = e => {
        console.log(e.target.files[0], "HandleCHange : --- >");
        if (e.target.files[0]) {
            setInputImg(URL.createObjectURL(e.target.files[0]));
            setCoverImg(e.target.files[0]);
        }
    }



    const handleSubmit = () => {
        handleUpload();
        // if (handleUpload) {
        //     const tripId = addTrip();
        // }
    }

    const addTrip = () => {

    }

    const handleUpload = () => {
        console.log(coverImg.name, "Handle change --> coverImg Name");
        const storageRef = ref(storage, `trips/${title}/${coverImg.name}`);
        const uploadTask = uploadBytesResumable(storageRef, coverImg);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //check progress and update
                const percentage = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(percentage);
            },
            (error) => {
                console.log(error, "Upload cover page error");
            },
            () => {
                //get uploaded URL
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((url) => {
                        console.log(url);
                        setCoverImgURL(url);
                    })
            }
        )
    };
    const enabledImageIconDiv = e => {
        if (e.target.checked)
            setIsEnabled(true);
        else
            setIsEnabled(false);
    }

    const imageContainer = {
        display: "flex",
        padding: "1em",
        margin: " 3em 1em",
        alignItems: "center",
        cursor: "pointer",
    }

    const imageContainerDisabled = {
        display: "flex",
        padding: "1em",
        margin: " 3em 1em",
        alignItems: "center",
        cursor: "pointer",
        pointerEvents: "none",
        opacity: "0.3",
    }

    const imageStyle = {
        height: "40px",
        width: "40px",
    }

    const progressCSS = {
        boxSizing: "border-box",
        display: "inline-block",
        height: "10em",
        width: "20em",
        verticalAlign: ".02em",
        marginRight: "2em",
    }

    const containerBorder = {
        borderRadius: "8px",
        border: "1px solid #d1d5db",
    }

    return (

        <div className="container-outer">
            <div className="container-inner">
                <div className="heading-container">
                    <h1 className="heading">Add Trip </h1>
                </div>
                <div className="form-container">
                    <div className="form-inner-container" >
                        <div class="title-container">
                            <input type="text"
                                class="title-input-box"
                                placeholder="Enter Title Of Trip..."
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                            />
                        </div>

                        <div className="privacy-inner-container" style={containerBorder}>
                            {/* <input
                                    type="file"
                                    onChange={handleChange} />
                                 */}
                            <div style={{ width: "100%" }} >
                                <span className="privacy-label">SELECT COVER PAGE</span>
                                <input
                                    type="file"
                                    id="file"
                                    ref={inputFile}
                                    style={{ display: "none" }}
                                    onChange={handleChangeMultiple}
                                    accept="image/*"
                                />
                            </div>

                            <div style={imageContainer} className="title-image" onClick={importTitleImage}>
                                <img src={inputImg} style={imageStyle} className="image-style" />
                            </div>
                            <div>
                                <progress style={progressCSS} value={progress} max="100" />
                            </div>
                        </div>

                        <div class="privacy-container">
                            <span class="privacy-inner-container">
                                <span className="privacy-label" style={{ marginRight: "8em" }}>THIS TRIP IS</span>
                                <span className="privacy-buttons-container">
                                    <button
                                        className={true === isPublish ? "privacy-buttons-selected" : "privacy-buttons"}
                                        onClick={() => setIsPublish(true)}>
                                        SHARED
                                    </button>
                                    <button
                                        className={false === isPublish ? "privacy-buttons-selected" : "privacy-buttons"}
                                        onClick={() => setIsPublish(false)}>
                                        PRIVATE
                                    </button>
                                </span>
                            </span>
                        </div>
                        <div className="privacy-inner-container" style={containerBorder}>
                            {/* <input
                                    type="file"
                                    onChange={handleChange} />
                                 */}
                            <div style={{ width: "100%" }} >
                                <span className="privacy-label">DO YOU HAVE PHOTOS FOR THE TRIP? </span>
                                <input type="checkbox" style={{ transform: " scale(2)" }} onChange={enabledImageIconDiv} />
                                <input
                                    type="file"
                                    id="file"
                                    ref={inputFileMultiple}
                                    style={{ display: "none" }}
                                    onChange={handleChange}
                                    accept="image/*"
                                    multiple
                                />
                            </div>

                            <div style={isEnabled ? imageContainer : imageContainerDisabled} className="title-image" onClick={importMultipleImage}>
                                <img src="http://localhost:3000/imageUploadIcon.png" style={imageStyle} className="image-style" />
                            </div>
                            <div>
                                <progress style={progressCSS} value={multiImgProgress} max="100" />
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <button className="submit-button" onClick={handleSubmit}>
                                SAVE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddTripForm;