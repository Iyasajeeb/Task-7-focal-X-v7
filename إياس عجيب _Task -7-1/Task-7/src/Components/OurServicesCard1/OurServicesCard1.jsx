/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './OurServicesCard1.css'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

export default function OurServicesCard1({icon,title,desc}) {
    return (
        <div className='card-1'>
            <div className='icon-div'>
                <img src={icon} />
            </div>
            <h4>{title}</h4>
            <p>{desc}</p>
            <button>Read More <MdKeyboardDoubleArrowRight /></button>
        </div>
    )
}
