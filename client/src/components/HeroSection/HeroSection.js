import './HeroSection.scss';

import React, { useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import category1 from '../../assets/images/category/category1.jpg';
import category2 from '../../assets/images/category/category2.jpg';
import category3 from '../../assets/images/category/category3.jpg';

const HeroSection = () => {
    const category = [
        {
            id: 1,
            title: 'summer collection',
            image: category1,
        },
        {
            id: 2,
            title: 'tom ford collection',
            image: category2,
        },
        {
            id: 3,
            title: 'marvelous super collection',
            image: category3,
        },
        {
            id: 4,
            title: 'marvelous super collection',
            image: category3,
        },
        {
            id: 5,
            title: 'summer collection',
            image: category1,
        },
        {
            id: 6,
            title: 'tom ford collection',
            image: category2,
        },
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const [listCategory, setListCategory] = useState(category);

    return (
        <div className="hero-section-container">
            <div className="category-section-container row">
                <Slider {...settings}>
                    {listCategory.map((item) => (
                        <div className="category-section" key={item.id}>
                            <div className="category-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="category-description">
                                <div className="category-title">
                                    {item.title}
                                </div>
                                <button>Click Me</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default HeroSection;
