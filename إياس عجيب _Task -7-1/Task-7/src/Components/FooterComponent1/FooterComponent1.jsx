// eslint-disable-next-line no-unused-vars
import React from 'react'
import './FooterComponent1.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCalendarAlt, FaFacebookF, FaInstagram, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { MdEmail, MdKeyboardDoubleArrowRight } from 'react-icons/md'

export default function FooterComponent1() {
    return (
       < Container className = 'FooterComponent' >
            <Row>
                <Col lg={3} md={6} sm={12} className='Footer-col-1'>
                    <a href="#"><img src={'/public/img/logo-white.svg'} alt="logo footer"  className='footer-logo'/></a>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Officiis hic omnis officia suscipit ipsam dolorum
                        eaque dicta provident ipsa cupiditate!
                    </p>
                    <div className='social-div'>
                        <a href="#" className='social-icon'><FaFacebookF className='icon' /></a>
                        <a href="#" className='social-icon'><FaTwitter className='icon' /></a>
                        <a href="#" className='social-icon'><FaYoutube className='icon' /></a>
                        <a href="#" className='social-icon'><FaInstagram className='icon' /></a>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className='Footer-col-2'>
                    <h4 >Quick Links</h4>
                    <ul>
                        <li><a href=""><MdKeyboardDoubleArrowRight /> Extech About</a></li>
                        <li><a href=""><MdKeyboardDoubleArrowRight /> Our Services</a></li>
                        <li><a href=""><MdKeyboardDoubleArrowRight /> Our Blogs</a></li>
                        <li><a href=""><MdKeyboardDoubleArrowRight /> FAQ'S</a></li>
                        <li><a href=""><MdKeyboardDoubleArrowRight /> Contact Us</a></li>
                    </ul>
                </Col>
                <Col lg={3} md={6} sm={12} className='Footer-col-3'>
                    <h4 >Recent Posts</h4>
                    <div>
                        <div className='Recent-div'>
                            <img src={'/public/img/footerThumb1_1.webp'} alt="" />
                            <div className='Recent-div-content'>
                                <FaCalendarAlt /><span>15th April,2024</span>
                                <p>Top 5 Most Famous Technology Trend Inn 2024</p>
                            </div>
                        </div>
                        <div className='Recent-div'>
                            <img src={'/public/img/footerThumb1_2.webp'} alt="" />
                            <div className='Recent-div-content'>
                                <FaCalendarAlt /><span>15th April,2024</span>
                                <p>Top 5 Most Famous Technology Trend Inn 2024</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className='Footer-col-4'>
                    <h4 >Contact us</h4>
                    <p><MdEmail /> info@example.com</p>
                    <p><FaPhoneAlt /> +208-6666-0112</p>
                    <div className='Footer-input-div'>
                        <input type="email" placeholder='Your email address' />
                        <button><HiOutlineArrowNarrowRight /></button>
                    </div>
                    <div className='Agree'>
                        <input id='agree' type="checkbox" />
                        <label htmlFor="agree"><p>I agree to the <a href="#">Privacy Policy.</a></p></label>
                    </div>
                </Col>

            </Row>
            </Container >
  )
}
