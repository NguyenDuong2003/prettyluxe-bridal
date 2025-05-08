import React, { useState, useEffect } from 'react';
import './InspirationList.scss';

import InspirationCard from '../InspirationCard/InspirationCard';
import Nav from '../../../Nav/Nav';
import Footer from '../../../Footer/Footer';

import specialImage2 from '../../../../assets/images/category/special-section2.jpg';

import inspiration1 from '../../../../assets/images/inspiration/inspiration1.png';
import inspiration11 from '../../../../assets/images/inspiration/inspiration11.png';
import inspiration2 from '../../../../assets/images/inspiration/inspiration2.png';
import inspiration22 from '../../../../assets/images/inspiration/inspiration22.png';
import inspiration3 from '../../../../assets/images/inspiration/inspiration3.png';
import inspiration33 from '../../../../assets/images/inspiration/inspiration33.png';
import inspiration4 from '../../../../assets/images/inspiration/inspiration4.png';
import inspiration44 from '../../../../assets/images/inspiration/inspiration44.png';
import inspiration5 from '../../../../assets/images/inspiration/inspiration5.png';
import inspiration55 from '../../../../assets/images/inspiration/inspiration55.png';

const InspirationList = () => {
    const fakeInsparitonList = [
        {
            id: 1,
            title: 'Disney-Inspired Wedding Dresses for a Fairytale Summer',
            date: '01/12/2025',
            imageMain: inspiration1,
            imageExtra: inspiration11,
        },
        {
            id: 2,
            title: '3 of Spring’s Most Romantic Wedding Dresses',
            date: '01/11/2022',
            imageMain: inspiration2,
            imageExtra: inspiration22,
        },
        {
            id: 3,
            title: 'How To Create a Realistic Wedding Budget',
            date: '12/12/2025',
            imageMain: inspiration3,
            imageExtra: inspiration33,
        },
        {
            id: 4,
            title: '3 Tips for a Stress-Free Wedding Dress Shopping Experience',
            date: '11/01/2024',
            imageMain: inspiration4,
            imageExtra: inspiration44,
        },
        {
            id: 5,
            title: 'Pre-Wedding Relaxation Tips for a Calm Bride and Groom',
            date: '19/04/2024',
            imageMain: inspiration5,
            imageExtra: inspiration55,
        },
    ];
    const [inspirationList, setInspirationList] = useState(fakeInsparitonList);

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu sau khi trang này được mount
    }, []);

    return (
        <div className="inspiration-list-container">
            <Nav />
            <div className="card-header">
                <h2 className="card-title">Inspiration</h2>
                <div className="card-description">
                    Allure Bridals is one of the premier designers of wedding
                    dresses, bridesmaid dresses, bridal and formal gowns.
                </div>
                <div
                    className="card-header-banner"
                    style={{ backgroundImage: `url(${specialImage2})` }}
                ></div>
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
            <div className="inspiration-list">
                {inspirationList.map((item, index) => {
                    const mode = index % 2 === 0 ? undefined : 'text-image';
                    return (
                        <InspirationCard
                            key={item.id || index}
                            inspiration={item}
                            mode={mode}
                        />
                    );
                })}
            </div>
            <Footer />
        </div>
    );
};

export default InspirationList;
