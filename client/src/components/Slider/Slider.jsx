import React, { useState, useEffect } from 'react';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);

    const data = [
        "https://images.pexels.com/photos/1040906/pexels-photo-1040906.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/14808620/pexels-photo-14808620.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/11294087/pexels-photo-11294087.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
    };

    useEffect(() => {
        if (autoSlide) {
            const slideInterval = setInterval(() => {
                nextSlide();
            }, 3000);
            return () => clearInterval(slideInterval);
        }
    }, [currentSlide, autoSlide]);

    const handleMouseEnter = () => {
        setAutoSlide(false);
    };

    const handleMouseLeave = () => {
        setAutoSlide(true);
    };

    return (
        <div className="slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((img, index) => (
                    <img key={index} src={img} alt={`Slide ${index + 1}`} />
                ))}
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
            <div className="indicators">
                {data.map((_, index) => (
                    <div key={index} className={`indicator ${index === currentSlide ? 'active' : ''}`} />
                ))}
            </div>
        </div>
    );
};

export default Slider;
