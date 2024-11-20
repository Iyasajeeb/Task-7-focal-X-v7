// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Logos.css'
export default function Logos(logo1,logo2,logo3,logo4,logo5) {
    return (
        <>
            <div className='LOGOS'>
                <img src={logo1} />
                <img src={logo2} />
                <img src={logo3} />
                <img src={logo4} />
                <img src={logo5} />
            </div>
        </>
    )
}
