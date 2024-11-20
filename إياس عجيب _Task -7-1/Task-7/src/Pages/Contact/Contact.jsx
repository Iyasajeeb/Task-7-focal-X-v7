/* eslint-disable no-unused-vars */
import React from 'react'
import './Contact.css'
import Hero2 from '../../Components/Hero2/Hero2'
import Footer2 from '../../Components/Footer2/Footer2'
import ContactInfo from '../../Components/ContactInfo/ContactInfo'
import Navbar2 from '../../Components/Navbar2/Navbar2'

export default function Contact() {
    return (
        <>
        <Navbar2/>
            <Hero2
                HeroTitle={"Contact Us"}
                HeroPage={"Contact Us"}
            />
            <ContactInfo />
            <Footer2 />
        </>
    )
}
