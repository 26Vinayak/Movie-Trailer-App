import React from 'react';
import './css/ContentComponent.css';

function ContentComponent({title,text,image,side}) {
    return (
        <div className = {`content_info ${side}`}>
            <div className="content_text">
                <h1>{title}</h1>
                <h2>{text}</h2>
                </div>
            <div className="content_image_container">
            <img src={image} alt={title} />
            </div>
        </div>
    )
}

export default ContentComponent;
