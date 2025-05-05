import './GallerySection.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import logo from '../../assets/images/logo.png';
import category1 from '../../assets/images/category/category1.jpg';
import category2 from '../../assets/images/category/category2.jpg';
import category3 from '../../assets/images/category/category3.jpg';
import category4 from '../../assets/images/category/category4.jpg';
import category5 from '../../assets/images/category/category5.jpg';
import category6 from '../../assets/images/category/category6.jpg';

const GallerySection = () => {
    // Lay top 6
    const categories = [
        {
            id: 1,
            title: 'summer collection',
            image: category4,
        },
        {
            id: 2,
            title: 'tom ford collection',
            image: category5,
        },
        {
            id: 3,
            title: 'marvelous super collection',
            image: category6,
        },
        {
            id: 4,
            title: 'marvelous super collection',
            image: category3,
        },
        {
            id: 5,
            title: 'summer collection',
            image: category2,
        },
        {
            id: 6,
            title: 'tom ford collection',
            image: category1,
        },
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <section className="gallery-section-container">
            <div className="gallery-title">
                <img src={logo} alt="Gallery Logo"></img>
            </div>
            <div className="gallery-content row">
                <Slider {...settings}>
                    {categories &&
                        categories.length > 0 &&
                        categories.map((category) => (
                            <div
                                className="gallery-item col-2"
                                key={category.id}
                            >
                                <img
                                    src={category.image}
                                    alt={category.title}
                                ></img>
                                <div className="gallery-item-title">
                                    {category.title}
                                </div>
                                <div className="over-lay"></div>
                                <i className="fa fa-instagram"></i>
                            </div>
                        ))}
                </Slider>
            </div>
        </section>
    );
};

export default GallerySection;
