// eslint-disable-next-line no-unused-vars
import React from 'react'
import './OurServicesCard2.css';

// eslint-disable-next-line react/prop-types
export default function OurServicesCard2({CardNumber,title,des}) {
    return (
        <div className='card-2'>
            <h3 className='card-number'>{CardNumber}</h3>
            <h4>{title}</h4>
            <p>{des}</p>
        </div>
    )
}
