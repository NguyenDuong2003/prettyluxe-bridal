import './ProductSection.scss';

import { useNavigate } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductSection = (props) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/product/${id}`);
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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

    return (
        <div className={`product-section-container ${props.mode}`}>
            {props.title && <h2 className="section-title">{props.title}</h2>}
            <div className="product-container row">
                <Slider {...settings}>
                    {props.products.map((product) => (
                        <div
                            key={product.id}
                            className="product-item"
                            onClick={() => handleClick(product.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="product-card">
                                <div className="img-container">
                                    <img
                                        src={product.image1}
                                        alt={product.title}
                                        className="normal-image"
                                    />
                                    <img
                                        src={product.image2}
                                        alt={product.title}
                                        className="hover-image"
                                    />
                                </div>
                                <div className="description-container">
                                    <div className="product-title">
                                        {product.title}
                                    </div>
                                    <p className="product-price">
                                        <span>${product.price}</span>
                                        <span>${product.discountPrice}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductSection;
