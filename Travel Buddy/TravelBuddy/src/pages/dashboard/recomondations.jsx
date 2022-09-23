import ImageSlider from '../imageSlider/ImageSlider';

import '../../css/Image-slider.css'

export const Recomondations = () => {

    const slides = [
        { url: 'http://localhost:3000/image-1.jpg', title: 'Beach' },
        { url: 'http://localhost:3000/image-2.jpg', title: 'Boat' },
        { url: 'http://localhost:3000/image-3.jpg', title: 'Forest' },
        { url: 'http://localhost:3000/image-4.jpg', title: 'City' },
        { url: 'http://localhost:3000/image-5.jpg', title: 'Italy' },
    ];

    const containerStyles = {
        width: "800px",
        height: "450px",
        margin: "5em auto",
        alignItems: "center",
    };

    return (
        <div class="container-outer">
            <div class="container-inner">
                <div className="heading-container">
                    <h1 className="heading">Recomended Trips</h1>
                </div>
                <div style={containerStyles}>
                    <ImageSlider slides={slides} />
                </div>
            </div>
        </div>

    );
};
export default Recomondations;