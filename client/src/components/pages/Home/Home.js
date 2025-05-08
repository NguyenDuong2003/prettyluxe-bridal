import './Home.scss';

import React from 'react';
import { useEffect } from 'react';

import Nav from '../../Nav/Nav';
import Banner from '../../Banner/Banner';
import HeroSection from '../../HeroSection/HeroSection';
import ProductSection from '../../ProductSection/ProductSection';
import GallerySection from '../../GallerySection/GallerySection';
import Footer from '../../Footer/Footer';

import specialImage1 from '../../../assets/images/category/special-section1.jpg';
import specialImage2 from '../../../assets/images/category/special-section2.jpg';

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

const Home = () => {
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

    const products2 = [
        {
            id: 1,
            title: 'Rouge Louboutin Velvet Matte',
            price: 50,
            discountPrice: 40,
            image1: product6,
            image2: product6_hover,
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
            title: 'YSL 425',
            price: 29.99,
            discountPrice: 20,
            image1: product1,
            image2: product1_hover,
        },

        {
            id: 5,
            title: 'GUCCI 505 Janet Rust Mat',
            price: 18,
            discountPrice: 15,
            image1: product4,
            image2: product4_hover,
        },

        {
            id: 6,
            title: 'Rouge Louboutin Velvet Matte',
            price: 50,
            discountPrice: 40,
            image1: product5,
            image2: product5_hover,
        },
    ];

    const products3 = [
        {
            id: 1,
            title: 'GUCCI 505 Janet Rust Mat',
            price: 18,
            discountPrice: 15,
            image1: product4,
            image2: product4_hover,
        },

        {
            id: 2,
            title: 'Rouge Louboutin Velvet Matte',
            price: 50,
            discountPrice: 40,
            image1: product5,
            image2: product5_hover,
        },
        {
            id: 3,
            title: 'Rouge Louboutin Velvet Matte',
            price: 50,
            discountPrice: 40,
            image1: product6,
            image2: product6_hover,
        },
        {
            id: 4,
            title: 'YSL 425',
            price: 29.99,
            discountPrice: 20,
            image1: product1,
            image2: product1_hover,
        },

        {
            id: 5,
            title: 'Rouge Louboutin Velvet Matte',
            price: 30,
            discountPrice: 25,
            image1: product2,
            image2: product2_hover,
        },

        {
            id: 6,
            title: 'Tom Ford RUBY RUSH',
            price: 33,
            discountPrice: 30,
            image1: product3,
            image2: product3_hover,
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home-page-container">
            <Nav />
            <Banner />
            <HeroSection />
            <ProductSection
                title="new arrivals"
                products={products1}
                mode="light"
            />
            <ProductSection
                title="top sellers"
                mode="dark"
                products={products2}
            />
            <div className="special-section-container">
                <div
                    className="special-content bg-fixed"
                    style={{ backgroundImage: `url(${specialImage2})` }}
                >
                    <div className="d-none d-md-block col-md-8"></div>
                    <div className="content-right col-12 col-md-4">
                        <span>spring collection</span>
                        <h2>
                            changing <span className="main-color">the</span>{' '}
                            ideal of <span className="main-color">beauty</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequuntur voluptate, fugit deserunt eos
                            eligendi tempora, quaerat, accusantium est quibusdam
                            accusamus ad illo similique tenetur nam quidem
                            reprehenderit culpa explicabo quisquam.
                        </p>
                        <button>shop now</button>
                        <div
                            className="content-right-image"
                            style={{ backgroundImage: `url(${specialImage1})` }}
                        ></div>
                    </div>
                </div>
            </div>
            <ProductSection
                title="new trends"
                products={products3}
                mode="light"
            />
            <GallerySection />
            <Footer />
        </div>
    );
};

export default Home;
