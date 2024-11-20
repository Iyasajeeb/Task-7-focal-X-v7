// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import FooterComponent1 from '../FooterComponent1/FooterComponent1'
import FooterComponent2 from '../FooterComponent2/FooterComponent2'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Container } from 'react-bootstrap'
export default function Footer() {
    return (

        <>
            <Container>
                <div className='pre-footer-div'>
                    <img src={"/public/img/ctaThumb.webp"} />
                    <p>Stay Connected With Cutting Edge IT</p>
                    <button>TALK TO A SPECIALIST<HiOutlineArrowNarrowRight /></button>

                </div>
            </Container>
            <div className='Footer'>

                <FooterComponent1 />
            </div>
            <div className='Footer-2'>
                <FooterComponent2 />
            </div>

        </>)
}
