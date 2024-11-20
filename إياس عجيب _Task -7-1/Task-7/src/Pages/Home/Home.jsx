// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Home.css'
import Hero from '../../Components/Hero/Hero'
import OurServices from '../../Components/OurServices/OurServices'
import BlogAndNews from '../../Components/BlogAndNews/BlogAndNews'
import Footer from '../../Components/Footer/Footer'
import Logos from '../../Components/Logos/Logos'
import NavbarHome from '../../Components/NavbarHome/NavbarHome'

export default function Home() {
    return (
        <>
        <NavbarHome/>
            <Hero />
            <Logos
                logo1={'/public/img/brandLogo1_1.svg'}
                logo2={'/public/img/brandLogo1_2.svg'}
                logo3={'/public/img/brandLogo1_3.svg'}
                logo4={'/public/img/brandLogo1_4.svg'}
                logo5={'/public/img/brandLogo1_5.svg'}
            />
            <OurServices />
            <BlogAndNews />
            <Footer />
        </>
    )
}
