import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.scss';

import ProductSection from '../../ProductSection/ProductSection';
import Nav from '../../Nav/Nav';
import Footer from '../../Footer/Footer';

import product1 from '../../../assets/images/products/product1.png';
import product1_hover from '../../../assets/images/products/product1_hover.png';
import product2 from '../../../assets/images/products/product2.png';
import product2_hover from '../../../assets/images/products/product2_hover.png';
import product3 from '../../../assets/images/products/product3.png';
import product3_hover from '../../../assets/images/products/product3_hover.png';
import product4 from '../../../assets/images/products/product4.png';
import product4_hover from '../../../assets/images/products/product4_hover.png';
import product5 from '../../../assets/images/products/product5.png';
import product5_hover from '../../../assets/images/products/product5_hover.png';
import product6 from '../../../assets/images/products/product6.png';
import product6_hover from '../../../assets/images/products/product6_hover.png';

const ProductDetail = () => {
    const ratings = [5, 4, 3, 2, 1];
    const counts = { 5: 1, 4: 0, 3: 0, 2: 0, 1: 0 };
    const images = [product1, product2, product3];
    const products1 = [
        {
            id: 1,
            title: 'YSL 425',
            price: 29.99,
            discountPrice: 20,
            image1: product1,
            image2: product1_hover,
        },

        {
            id: 2,
            title: 'Rouge Louboutin Velvet Matte',
            price: 30,
            discountPrice: 25,
            image1: product2,
            image2: product2_hover,
        },

        {
            id: 3,
            title: 'Tom Ford RUBY RUSH',
            price: 33,
            discountPrice: 30,
            image1: product3,
            image2: product3_hover,
        },

        {
            id: 4,
            title: 'GUCCI 505 Janet Rust Mat',
            price: 18,
            discountPrice: 15,
            image1: product4,
            image2: product4_hover,
        },

        {
            id: 5,
            title: 'Rouge Louboutin Velvet Matte',
            price: 50,
            discountPrice: 40,
            image1: product5,
            image2: product5_hover,
        },
        {
            id: 6,
            title: 'Rouge Louboutin Velvet Matte',
            price: 50,
            discountPrice: 40,
            image1: product6,
            image2: product6_hover,
        },
    ];

    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(images[0]);

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu sau khi trang này được mount
    }, [id]);

    return (
        <div className="product-detail-container">
            <Nav />
            <div className="product-detail">
                <div className="product-detail__left">
                    <div className="thumbnails">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`thumb-${index}`}
                                className={`thumbnail ${
                                    selectedImage === img ? 'active' : ''
                                }`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                    <img
                        src={selectedImage}
                        alt="Delicate Dress"
                        className="main-image"
                    />
                </div>
                <div className="product-detail__right">
                    <h1>DELICATE DRESS</h1>
                    <p className="price">$2,200.00</p>
                    <div className="rating">
                        {'❤️'.repeat(5)}{' '}
                        <span className="review">(5.0 / 12 reviews)</span>
                        <a href="#">Write a Review</a>
                    </div>

                    <p className="payment">
                        Pay in 4 interest-free payments of $550.00.{' '}
                        <strong>Klarna</strong> <a href="#">Learn more</a>
                    </p>

                    <div className="why-we-love">
                        <h2>Why We Love Her</h2>
                        <p>
                            Crafted with meticulous attention to detail, this
                            crepe fitted gown exudes effortless elegance. The
                            plunging neckline is detailed with floral
                            embellishments...
                        </p>
                    </div>

                    <div className="sizes">
                        <h3>SIZE</h3>
                        <a href="#">View Product Measurements</a>
                        <div className="size-list">
                            {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18].map((size) => (
                                <button key={size} className="size-btn">
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="btn preorder">PREORDER</button>
                    <button className="btn book">BOOK AN APPOINTMENT</button>

                    <div className="actions">
                        <a href="#">🔗 Share</a>
                        <a href="#">❤️ Add to Wishlist</a>
                    </div>
                </div>
            </div>
            <ProductSection title="Relevant" mode="dark" products={products1} />
            <div className="review-summary">
                <h4>REVIEWS</h4>
                <h2>Here's what our brides are saying</h2>
                <div className="tabs">
                    <span className="active">Reviews</span>
                    <span>Questions</span>
                </div>
                <div className="summary-container">
                    <div className="left">
                        <div className="score">5.0</div>
                        <div className="hearts">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i}>💗</span>
                            ))}
                        </div>
                        <div className="review-count">1 Review</div>
                        <button className="write-btn">WRITE A REVIEW</button>
                    </div>

                    <div className="middle">
                        <div className="percent">✔ 100%</div>
                        <div className="recommend">
                            of respondents would
                            <br />
                            recommend this to a friend
                        </div>
                    </div>

                    <div className="right">
                        {ratings.map((r) => (
                            <div className="bar-row" key={r}>
                                <span className="label">{r} Hearts</span>
                                <div className="bar-container">
                                    <div
                                        className="bar"
                                        style={{
                                            width: `${
                                                counts[r] > 0 ? 100 : 0
                                            }%`,
                                        }}
                                    ></div>
                                </div>
                                <span className="count">{counts[r]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;
