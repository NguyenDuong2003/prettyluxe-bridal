import './InspirationDetail.scss';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Nav from '../../../Nav/Nav';
import Footer from '../../../Footer/Footer';

import inspiration3 from '../../../../assets/images/inspiration/inspiration3.png';

const InspirationDetail = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu sau khi trang này được mount
    }, [id]);
    return (
        <div className="inspiration-detail-container">
            <Nav />
            <div
                className="inspiration-detail-banner"
                style={{ backgroundImage: `url(${inspiration3})` }}
            >
                <div className="banner-content">
                    <h2 className="banner-title">
                        Disney-Inspired Wedding Dresses for a Fairytale Summer
                    </h2>
                    <div className="banner-description">
                        <p>Friday, April 25, 2025</p>
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
                        <p>Read More Below</p>
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
            <div className="inspiration-detail">
                The days leading up to your wedding are a mix of excitement and
                anticipation, but they can also be a little stressful. Taking
                time to relax before the big day can help you stay grounded and
                ensure that you’re ready to savor every moment. Here are four
                pre-wedding relaxation tips from Allure Bridals to help you and
                your partner feel calm, collected, and ready to celebrate your
                love.
                <br />
                <br />
                1. Prioritize a Good Night’s Sleep Restful sleep is one of the
                best ways to keep nerves at bay and ensure you’re both feeling
                your best. Set a consistent bedtime in the week leading up to
                the wedding and create a calming bedtime routine—try winding
                down with a warm bath, a good book, or some gentle stretches.
                Tip: If you’re feeling restless, try breathing exercises or a
                soothing meditation app to ease into sleep.
                <br />
                <br />
                2. Delegate Last-Minute Tasks As the big day approaches, it’s
                time to let others help. Hand over any remaining tasks to your
                wedding party, family, or wedding planner so you can focus on
                relaxing and being present. Having trusted people handle the
                details gives you the freedom to enjoy the lead-up stress-free.
                Tip: Make a list of tasks you can delegate and assign them to
                specific people. Then, let go of the details—they’ve got you
                covered!
                <br />
                <br />
                3. Plan a Quiet Night Together A cozy evening with your partner
                can be a perfect way to reconnect and recharge. Plan a simple,
                relaxed night in with a favorite meal, a lighthearted movie, or
                just some time reminiscing about your journey together. This can
                be a calming moment to reflect on your love and all you’re about
                to celebrate. Tip: Set aside any planning concerns, turn off
                your phones, and just enjoy each other’s company before the big
                day.
                <br />
                <br />
                4. Take a Tech Break In the final days, give yourself a break
                from screens and wedding updates. A tech-free evening allows you
                both to disconnect from distractions and focus on each other,
                family, or a peaceful activity. Plus, stepping away from screens
                can help reduce stress and keep your mind at ease. Tip: Use the
                time to take a walk, enjoy a favorite book, or spend time in
                nature. This will help keep you centered and present as the big
                day arrives. Remember, the key to a calm and memorable wedding
                day is feeling relaxed and connected to what matters most: each
                other. At Allure Bridals, we believe in the power of small,
                meaningful moments, and with these pre-wedding relaxation tips,
                you’ll feel ready to celebrate your love story with joy and
                ease. Here’s to a beautiful wedding day filled with love and
                unforgettable memories!
            </div>
            <Footer />
        </div>
    );
};

export default InspirationDetail;
