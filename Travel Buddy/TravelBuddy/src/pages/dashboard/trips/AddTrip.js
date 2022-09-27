import React, { useEffect } from "react";
import { useState } from "react";
import dataBase, { storage } from "../../../config/firebase"
import { collection, addDoc } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';


const AddTripForm = () => {

    const inputFile = useRef(null);
    const inputFileMultiple = useRef(null);

    const [inputImg, setInputImg] = useState(require("../../../images/imageUploadIcon.png"));
    const [title, setTitle] = useState('');
    const [tripId, setTripId] = useState();
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


    // useEffect(() => {
    //     console.log(tripImgURLs, "tripImag URLs in use Effect");
    //     // addTripImages(tripId, tripImgURLs);
    // }, [tripImgURLs]);

    const importCoverImage = () => {
        inputFile.current.click();
    };

    const imporImageList = () => {
        inputFileMultiple.current.click();
    };


    const handleChangeCoverImg = e => {
        console.log(e.target.files[0], "handleChangeCoverImg : --- >");
        if (e.target.files[0]) {
            setInputImg(URL.createObjectURL(e.target.files[0]));
            setCoverImg(e.target.files[0]);
        }
    }

    const handleChangeImageList = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImg = e.target.files[i];
            newImg['id'] = Math.random();
            setTripImgs((prevState) => [...prevState, newImg])
        }
        // console.log(e.target.files, "handleChangeImageList : --- >");
        // console.log(tripImgURLs, "handleChangeImageList URLS : ");
    }

    const handleSubmit = async () => {
        console.log(tripImgURLs, "NOW SUBMITTING DATA");
        if (coverImgURL === null)
            setCoverImgURL("http://localhost:3000/image-not-found.jpg");
        console.log(coverImgURL, "coverImgURL in handle submit : ");
        const tripsRef = collection(dataBase, 'trips');
        await addDoc(tripsRef, {
            title: title,
            coverImg: coverImgURL,
            isPublish: isPublish,
            createDate: createDate,
            userId: userId,
        }).then(async (docRef) => {
            console.log(docRef.id, "new Trip ID");
            // setTripId(docRef.id);
            addTripImages(docRef.id);
        })
            .catch(error => {
                console.log(error);
            })
    }

    const handleUploadImgList = () => {
        const promises = [];
        console.log("inside handleUploadImgList");
        console.log(tripImgs, "inside handleUploadImgList");
        tripImgs.map(async (image) => {
            const path = `trips/${title}/${image.name}` + uuidv4();
            const storageRef = ref(storage, path);
            const uploadTask = uploadBytesResumable(storageRef, image);
            promises.push(uploadTask);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // check progress and update
                    const percentage = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setMultiImgProgress(percentage);
                },
                (error) => {
                    console.log(error, "Upload multiple image error");
                },
                async () => {
                    //get uploaded URL
                    await getDownloadURL(uploadTask.snapshot.ref)
                        .then((url) => {
                            // console.log(url,"URL");
                            setTripImgURLs((prevState) => [...prevState, url]);
                            console.log(tripImgURLs, "GETTING MULTIPLE URLS");
                        })
                }
            )
            // console.log(tripImgURLs, "inside handleUploadImgList URLS");
        })
        Promise.all(promises)
            .then(() => alert("All images uploaded"))
            .catch((err) => console.log(err, "Error in upload Trip Images."));
    };

    const addTripImages = async (tripId) => {

        const tripImgsRef = collection(dataBase, 'tripImageCollection');

        console.log(tripImgURLs, "Inside ADDING MULTIPLE TRIP IMAGES");
        tripImgURLs.map(async(url)=>{
            console.log(url,"URL");
            await addDoc(tripImgsRef, {
                tripId: tripId,
                imgURL: url,
                userId: userId,
            })
        })
    }

    const handleUploadCoverImg = () => {
        if (coverImg !== null) {
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
                        .then((coverImgURL) => {
                            setCoverImgURL(coverImgURL);
                            console.log(coverImgURL, "coverImgURL in getDownloadURL");
                        })
                }
            )
        }
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
        height: "9em",
        width: "20em",
        padding: "0px 10px",
        margin:" 0px 2px",
        verticalAlign: "-1em",
        // marginRight: "2em",
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
                                    onChange={handleChangeCoverImg}
                                    accept="image/*"
                                />
                            </div>

                            <div style={imageContainer} className="title-image" onClick={importCoverImage}>
                                <img src={inputImg} style={imageStyle} className="image-style" />
                            </div>
                            <div style={{ margin: "auto", width: "100%" }}>
                                {/* <progress style={progressCSS} value={progress} max="100" /> */}
                                <button className="privacy-buttons" style={{ borderRadius: "15px", width: "12em", height: "3em" }} onClick={handleUploadCoverImg}>
                                    UPLOAD IMAGE
                                </button>
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
                            <div style={{ width: "100%" }} >
                                <span className="privacy-label">DO YOU HAVE MORE PHOTOS ? </span>
                                <input type="checkbox" style={{ transform: " scale(2)" }} onChange={enabledImageIconDiv} />
                                <input
                                    type="file"
                                    id="file"
                                    ref={inputFileMultiple}
                                    style={{ display: "none" }}
                                    onChange={handleChangeImageList}
                                    accept="image/*"
                                    multiple
                                />
                            </div>

                            <div style={isEnabled ? imageContainer : imageContainerDisabled} className="title-image" onClick={imporImageList}>
                                <img src="http://localhost:3000/imageUploadIcon.png" style={imageStyle} className="image-style" />
                            </div>
                            {/* <div>
                                <progress style={progressCSS} value={multiImgProgress} max="100" />
                            </div> */}
                            <div style={{ margin: "auto", width: "100%" }}>
                                <button className="privacy-buttons" style={{ borderRadius: "15px", width: "12em", height: "3em" }} onClick={handleUploadImgList}>
                                    UPLOAD IMAGES
                                </button>
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