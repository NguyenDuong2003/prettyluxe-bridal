import './BrandProduct.scss';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

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

const BrandProduct = () => {
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
    const navigate = useNavigate();
    const { id } = useParams();

    const [countProduct, setCountProduct] = useState(12);

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu sau khi trang này được mount
    }, [id]);

    const handleClickProductDetail = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="product-brand-container">
            <Nav />
            <div className="product-brand-card">
                <div className="card-header">
                    <h2 className="card-title">Bridgerton Dress</h2>
                    <div className="card-description">
                        Drawing from the shows’ opulent aesthetic and the bold,
                        regal fashions of the character of Queen Charlotte, our
                        Bridgerton wedding dresses bring romance and glamour to
                        modern-day brides. The collection showcases a stunning
                        array of bridal gowns, each capturing the essence of
                        Shondaland’s series with intricate lace details,
                        luxurious fabrics, and exquisite embellishments.
                        <br />
                        <br />
                        Step into your timeless romance with vintage-inspired
                        dresses incorporating elements like puffed sleeves,
                        pleated basque waists, and classic lace florals.
                        Alternatively, break boldly away from tradition with
                        colors like elegant black or gentle mauve. Our
                        Bridgerton-inspired wedding dress collection also
                        includes designs with colorful floral embroideries to
                        turn heads on your special day. Complete your look with
                        elegant gloves or a romantic cape to truly embody the
                        wonder and sophistication of the Regency era.
                    </div>
                </div>
                <div className="underline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 12 12"
                        fill="none"
                    >
                        <rect
                            x="5.99991"
                            y="1.58603"
                            width="6"
                            height="6"
                            transform="rotate(45 5.99991 1.58603)"
                            fill="#695C5C"
                            stroke="white"
                            strokeWidth="2"
                        ></rect>
                    </svg>
                </div>
                <ProductSection
                    products={products1}
                    title="Referent"
                    mode="light"
                />
                <ProductSection
                    products={products1}
                    title="Popular"
                    mode="dark"
                />
            </div>
            <div className="product-list-container">
                <h2 className="section-title">View All</h2>
                <div className="product-list row">
                    {products1.map((product, index) => {
                        if (index < countProduct) {
                            return (
                                <div
                                    key={product.id}
                                    className="product-item col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                                    onClick={() =>
                                        handleClickProductDetail(product.id)
                                    }
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
                                                <span>
                                                    ${product.discountPrice}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BrandProduct;
