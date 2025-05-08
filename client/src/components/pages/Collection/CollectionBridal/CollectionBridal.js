import './CollectionBridal.scss';

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ProductSection from '../../../ProductSection/ProductSection';
import Nav from '../../../Nav/Nav';
import Footer from '../../../Footer/Footer';

import collection1 from '../../../../assets/images/collectionImg/collection1.png';
import collection2 from '../../../../assets/images/collectionImg/collection2.png';
import collection3 from '../../../../assets/images/collectionImg/collection3.png';
import collection4 from '../../../../assets/images/collectionImg/collection4.png';
import product1 from '../../../../assets/images/products/product1.png';
import product1_hover from '../../../../assets/images/products/product1_hover.png';
import product2 from '../../../../assets/images/products/product2.png';
import product2_hover from '../../../../assets/images/products/product2_hover.png';
import product3 from '../../../../assets/images/products/product3.png';
import product3_hover from '../../../../assets/images/products/product3_hover.png';
import product4 from '../../../../assets/images/products/product4.png';
import product4_hover from '../../../../assets/images/products/product4_hover.png';
import product5 from '../../../../assets/images/products/product5.png';
import product5_hover from '../../../../assets/images/products/product5_hover.png';
import product6 from '../../../../assets/images/products/product6.png';
import product6_hover from '../../../../assets/images/products/product6_hover.png';

const CollectionBridal = () => {
    const brands = [
        {
            name: 'RONALD JOYCE',
            sub: 'UNITED KINGDOM',
            image: collection1,
        },
        {
            name: 'MORILEE',
            sub: 'MADELINE GARDNER',
            image: collection2,
        },
        {
            name: 'MORILEE',
            sub: 'MADELINE GARDNER',
            image: collection3,
        },
        {
            name: 'MGNY',
            sub: 'MADELINE GARDNER NEW YORK',
            image: collection4,
        },
    ];

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

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu sau khi trang này được mount
    }, []);

    const handleClick = (id) => {
        navigate(`/bridal-wedding/${id}`);
    };

    return (
        <div className="collection-bridal-container">
            <Nav />

            <div className="brand-showcase">
                <div className="brand-showcase-header container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <h2 className="brand-showcase-title">
                                Exclusive distributor
                            </h2>
                            <div className="brand-showcase-underline">
                                In Vietnam
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brand-showcase__grid">
                    <div className="left">
                        <div className="brand-card large">
                            <img src={brands[0].image} alt={brands[0].name} />
                            <div className="brand-info">
                                <h2>{brands[0].name}</h2>
                                <p>{brands[0].sub}</p>
                            </div>
                        </div>
                    </div>
                    <div className="center">
                        <div className="brand-card large">
                            <img src={brands[1].image} alt={brands[1].name} />
                            <div className="brand-info">
                                <h2>{brands[1].name}</h2>
                                <p>{brands[1].sub}</p>
                            </div>
                        </div>
                    </div>
                    <div className="center">
                        <div className="brand-card large">
                            <img src={brands[2].image} alt={brands[2].name} />
                            <div className="brand-info">
                                <h2>{brands[2].name}</h2>
                                <p>{brands[2].sub}</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="brand-card small">
                            <img src={brands[3].image} alt={brands[3].name} />
                            <div className="brand-info">
                                <h2>{brands[3].name}</h2>
                                <p>{brands[3].sub}</p>
                            </div>
                        </div>
                        <div className="social-box">
                            <h3>FOLLOW US</h3>
                            <hr />
                            <div className="icons">
                                <i className="fa fa-youtube-play"></i>
                                <i className="fa fa-facebook-official"></i>
                                <i className="fa fa-pinterest"></i>
                                <i className="fa fa-instagram"></i>
                            </div>
                        </div>
                    </div>
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

            <div className="collection-bridal-card">
                <div className="card-header">
                    <h2 className="card-title">Ronald Royce Wedding</h2>
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
                    <div className="card-btn">
                        <button
                            className="cta-button"
                            onClick={() => handleClick(1)}
                        >
                            SHOP NOW
                        </button>
                    </div>
                </div>
                <ProductSection products={products1} />
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
            </div>
            <div className="collection-bridal-card">
                <div className="card-header">
                    <h2 className="card-title">Morrilee</h2>
                    <div className="card-description">
                        Our most dreamy collection of romantic wedding dresses,
                        Allure Romance, continues to embody the restraint and
                        timelessness of classic bridal design. Frothy tulle
                        skirts and lacy bodices combine to lend the collection a
                        floral effect: a wedding-perfect bouquet of romantic
                        bridal gowns.
                    </div>
                    <div className="card-btn">
                        <button
                            className="cta-button"
                            onClick={() => handleClick(2)}
                        >
                            SHOP NOW
                        </button>
                    </div>
                </div>
                <ProductSection products={products1} />
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
            </div>
            <div className="collection-bridal-card">
                <div className="card-header">
                    <h2 className="card-title">MGNY</h2>
                    <div className="card-description">
                        When you choose a gown from our Madison James bridal
                        designer label, you’ll choose a bridal look that makes
                        you look and feel magical on your wedding day. Our
                        expertly chosen materials and breathable, lightweight
                        designs will keep you cool and comfortable as you get
                        ready with your bridal party, say “I do,” and dance the
                        night away with your loved ones.
                        <br />
                        <br />
                        Our Madison James wedding dresses are thoughtfully
                        crafted, so you'll look and feel amazing. We carefully
                        select light, fabulous fabrics – ones that feel soft
                        against your skin, that never weigh you down, and that
                        stretch and move with you. The Madison James bridal line
                        includes an exquisite range of styles, including
                        ethereal tulle ballgowns, chic sleeveless sheath
                        dresses, and so much more. Whether you’re looking for
                        opulence or minimalism, you can find a stunning gown to
                        match your sense of style when you explore this
                        collection.
                    </div>
                    <div className="card-btn">
                        <button
                            className="cta-button"
                            onClick={() => handleClick(3)}
                        >
                            SHOP NOW
                        </button>
                    </div>
                </div>
                <ProductSection products={products1} />
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
            </div>
            <Footer />
        </div>
    );
};

export default CollectionBridal;
