// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
import Hero2 from '../../Components/Hero2/Hero2'
import Team from '../../Components/Team/Team'
import Logos from '../../Components/Logos/Logos'
import Footer2 from '../../Components/Footer2/Footer2'
import Navbar2 from '../../Components/Navbar2/Navbar2'

export default function About() {
    return (
        <>
            <Navbar2/>
            <Hero2
                HeroTitle={"About Us"}
                HeroPage={"About Us"}
            />
            <div className='list-about'>
                <ul>
                    <li><img src='/public/img/asterisk.svg' />Cyber Security</li>
                    <li><img src='/public/img/asterisk.svg' />IT Solution</li>
                    <li><img src='/public/img/asterisk.svg' />Technology</li>
                    <li><img src='/public/img/asterisk.svg' />Data Security</li>
                </ul>
            </div>
            <Team />
            <Logos
                logo1={'/public/img/envato-gray.svg'}
                logo2={'/public/img/envato-gray.svg'}
                logo3={'/public/img/envato-blue.svg'}
                logo4={'/public/img/envato-gray.svg'}
                logo5={'/public/img/envato-gray.svg'}
            />
            <Footer2 />
        </>
    )
}
