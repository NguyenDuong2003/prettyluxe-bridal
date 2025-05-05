import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingCart,
    faUser,
    faSearch,
    faBars,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.png';
import './Nav.scss';

const Nav = () => {
    const [scrollingUp, setScrollingUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setScrollingUp(false); // đang cuộn xuống
            } else {
                setScrollingUp(true); // đang cuộn lên
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`navbar navbar-expand-lg navbar-light bg-light ${
                scrollingUp ? 'nav-show' : 'nav-hide'
            }`}
        >
            <div className="nav-container">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="SolStore" className="nav-logo" />
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                {/* Navigation Links */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shop">
                                SHOP
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">
                                PRODUCT
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">
                                BLOG
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">
                                ABOUT US
                            </Link>
                        </li>
                    </ul>

                    {/* Right Side Icons */}
                    <div className="d-flex">
                        <div className="nav-icon mx-2">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                        <div className="nav-icon mx-2">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="nav-icon mx-2">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span className="cart-badge">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
