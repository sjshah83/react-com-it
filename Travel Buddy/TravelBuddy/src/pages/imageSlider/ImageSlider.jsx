import { useState } from "react";
import '../../css/Image-slider.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';

const ImageSlider = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        // backgroundImage: `url(${slides[currentIndex].url})`,
        width: "100%",
        height: "100%",
        borderRadius: "25px",
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

    const slideLabel = {
        position: "absolute",
        top: "12px",
        left: "40%",
        fontSize: "35px",
        color: "#ffffff",
        zIndex: "1",
    };

    const dotsContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const dotStyle = {
        margin: "2em 5px",
        cursor: "pointer",
        fontSize: "30px",
        justifyContent: "center",
        alignItems: "center",
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div style={sliderStyles}>
            <FaArrowAltCircleLeft style={leftArrowStyles} onClick={goToPrevious} />
            <FaArrowAltCircleRight style={rightArrowStyles} onClick={goToNext} />
            <div style={slideLabel}>{slides[currentIndex].title}</div>
            {/* <div style={slideStyles}></div> */}
            {
                slides.map((slide, index) => {
                    return (
                        <div
                            className={index === currentIndex ? 'slideStyleAnimation active  ' : 'slideStyleAnimation'}
                            // style={slideStyles}
                            key={index}
                        >
                            {index === currentIndex && (<img src={slides[currentIndex].url} style={slideStyles} />)}
                        </div>
                    )
                })
            }

            <div style={dotsContainerStyle}>
                {slides.map((slide, slideIndex) => (
                    <GoPrimitiveDot key={slideIndex} style={dotStyle} onClick={() => goToSlide(slideIndex)} />
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;