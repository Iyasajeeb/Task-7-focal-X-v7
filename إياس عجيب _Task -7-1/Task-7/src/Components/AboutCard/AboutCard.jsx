// eslint-disable-next-line no-unused-vars
import React from 'react'
import './AboutCard.css'
// eslint-disable-next-line react/prop-types
function AboutCard({AboutCardImage,AboutCardName,AboutCardParagraph}) {
    return (
        <div className='AboutCard'>
            <div className='AboutCard-image'>
                <img src={AboutCardImage} alt="personal image" />
                <div className='AboutCard-content'>
                    <h4>{AboutCardName}</h4>
                    <p>{AboutCardParagraph}</p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutCard