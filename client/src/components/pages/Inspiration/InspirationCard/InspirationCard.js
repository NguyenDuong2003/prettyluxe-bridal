import './InspirationCard.scss';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const InspirationCard = (props) => {
    const navigate = useNavigate();
    const handleInspirationDetail = (inspirationId) => {
        navigate(`/inspiration/${inspirationId}`);
    };
    return (
        <div className={`inspiration-card ${props.mode}`}>
            <div className="image-section">
                <img
                    src={props.inspiration.imageMain}
                    alt="Image-main"
                    className="main-image"
                />
                <img
                    src={props.inspiration.imageExtra}
                    alt="thumbnail"
                    className="thumbnail-image"
                />
                <div className="post-date">✦ {props.inspiration.date} ✦</div>
            </div>
            <div className="content-section-container">
                <div className="content-section">
                    <h2 className="title">{props.inspiration.title}</h2>
                    <p className="subtitle">Read More Below</p>
                    <button
                        className="get-inspired-button"
                        onClick={() => {
                            handleInspirationDetail(props.inspiration.id);
                        }}
                    >
                        GET INSPIRED
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InspirationCard;
