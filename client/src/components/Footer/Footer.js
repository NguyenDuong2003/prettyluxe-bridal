import React from 'react';
import './Footer.scss';

const Footer = () => {
    const contactInfo = {
        hotline: { text: '1900868510 (8:00-21:00)', link: 'tel:1900868510' },
        emails: [
            {
                label: 'Business partnership:',
                email: 'sales@thegidskinfood.com',
            },
        ],
    };

    const categories = ['Home', 'Skincare', 'Makeup', 'Brands', 'Beauty Blog'];

    const aboutUs = [
        'Payment Methods',
        'Return & Refund Policy',
        'Shipping Policy',
        'Exchange Policy',
        'Privacy Policy',
        'Terms of Service',
    ];

    const companyInfo = {
        name: 'Biao Ocean Trading and Service Co., Ltd',
        registration:
            'Business License No: 0316037655 issued by the Department of Planning and Investment on 25/11/2019',
    };

    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Contact Section */}
                <div className="footer__section">
                    <h3 className="footer__title">Contact Information</h3>
                    <p className="footer__contact">
                        Hotline:{' '}
                        <a href={contactInfo.hotline.link}>
                            {contactInfo.hotline.text}
                        </a>
                    </p>
                    <ul className="footer__list">
                        {contactInfo.emails.map((item, index) => (
                            <li key={index}>
                                {item.label}{' '}
                                <a href={`mailto:${item.email}`}>
                                    {item.email}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="footer__company-info">
                        <p>{companyInfo.name}</p>
                        <p>{companyInfo.registration}</p>
                    </div>
                </div>

                {/* Categories */}
                <div className="footer__section hide-on-mobile">
                    <h3 className="footer__title">Categories</h3>
                    <ul className="footer__list no-bullets">
                        {categories.map((category, index) => (
                            <li key={index}>
                                <a href="#">{category}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* About Us */}
                <div className="footer__section hide-on-mobile">
                    <h3 className="footer__title">About Us</h3>
                    <ul className="footer__list no-bullets">
                        {aboutUs.map((item, index) => (
                            <li key={index}>
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social */}
                <div className="footer__section">
                    <h3 className="footer__title">Connect with Us</h3>
                    <div className="footer__social">
                        <div className="social-item">
                            <i className="fa fa-facebook-square"></i>
                        </div>
                        <div className="social-item">
                            <i className="fa fa-instagram"></i>
                        </div>
                    </div>

                    <h3 className="footer__title">Payment Methods</h3>
                    <div className="footer__social">
                        <div className="social-item">
                            <i className="fa fa-cc-paypal"></i>
                        </div>

                        <div className="social-item">
                            <i className="fa fa-paypal"></i>
                        </div>
                        <div className="social-item">
                            <i className="fa fa-credit-card-alt"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__copyright">
                <p>Copyright © 2025 – All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
