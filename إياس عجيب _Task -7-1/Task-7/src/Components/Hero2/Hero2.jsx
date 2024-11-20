/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero2.css'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function Hero2({ HeroTitle, HeroPage }) {
  return (
    <>
      <div className='Hero-2'>
        <img src='/public/img/line-element.webp' />
        <div className='overlay'></div>
        <div className='Hero-2-content'>
          <h2>{HeroTitle}</h2>
          <p>Home <MdKeyboardArrowRight /> {HeroPage}</p>
        </div>
      </div>
    </>
  )
}
