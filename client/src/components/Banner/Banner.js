import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import './Banner.scss';

import banner4 from '../../assets/images/products/banner4.png';
import banner5 from '../../assets/images/products/banner5.png';
import banner6 from '../../assets/images/products/banner6.png';

const Banner = () => {
    const banners = [
        {
            id: 1,
            title: 'Louboutin Velvet Matte',
            description:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etipendi adipisci vitae lusita atque quo optio aliqua corrupti, maxime totam facilis veniam reum sapiente dolor. Deserunt amet quisquam dignissimus od atacati mulitta.',
            image: banner4,
        },
        {
            id: 2,
            title: 'Tom Ford RUBY RUSH',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elipendi adipisci vitae lucto atque quo optio volutpatis corrunt.',
            image: banner5,
        },
        {
            id: 3,
            title: 'YSL Pure Couture',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elipendi adipisci vitae lucto atque quo optio volutpatis corrunt.',
            image: banner6,
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [listBanner, setListBanner] = useState(banners);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    };

    const handleClickContent = (banner) => {
        alert('Banner clicked!: ' + banner.title);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000);
        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        <div className="banner-container">
            <div className="banner-slider">
                {listBanner.map((banner, index) => (
                    <div
                        key={banner.id}
                        className={`banner-slide ${
                            index === currentSlide ? 'active' : ''
                        }`}
                    >
                        <div className="banner-image">
                            <img src={banner.image} alt={banner.title} />
                        </div>
                        <div className="banner-content">
                            <div className="text-container">
                                <h1>{banner.title}</h1>
                                <p>{banner.description}</p>
                                <div className="banner-divider"></div>
                                <button
                                    className="cta-button"
                                    onClick={() => handleClickContent(banner)}
                                >
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                        <div className="slide-control-container">
                            <button
                                className="slider-control prev"
                                onClick={prevSlide}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <span>
                                {currentSlide + 1}/{banners.length}
                            </span>
                            <button
                                className="slider-control next"
                                onClick={nextSlide}
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
