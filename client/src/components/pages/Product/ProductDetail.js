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

const images = [product1, product2, product3];

const ProductDetail = () => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(images[0]);

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

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu sau khi trang này được mount
    }, [id]);

    return (
        <>
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
            <Footer />
        </>
    );
};

export default ProductDetail;
