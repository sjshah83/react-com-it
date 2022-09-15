import { useState } from "react";
import '../../css/Image-slider.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {

    const [currestIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        backgroundImage: `url(${slides[currestIndex].url})`,
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const sliderStyles = {
        position: "relative",
        height: "100%",
    };

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        left: "32px",
        fontSize: "45px",
        color: "#ffffff",
        cursor: "pointer",
        zIndex: "1",
        transform: "translate(0,-50%)"
    };

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        right: "32px",
        fontSize: "45px",
        color: "#ffffff",
        cursor: "pointer",
        zIndex: "1",
        transform: "translate(0,-50%)"
    };

    const slideLabel ={
        position: "absolute",
        top: "12px",
        left: "40%",
        fontSize: "35px",
        color: "#ffffff",
        zIndex: "1",
    };

    const goToPrevious = () => {
        const isFirstSlide = currestIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currestIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currestIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currestIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div style={sliderStyles}>
            <FaArrowAltCircleLeft style={leftArrowStyles} onClick={goToPrevious} />
            <FaArrowAltCircleRight style={rightArrowStyles} onClick={goToNext} />
            <div style={slideStyles}></div>
            <div style={slideLabel}>{slides[currestIndex].title}</div>
        </div>
    );
}

export default ImageSlider;