// eslint-disable-next-line no-unused-vars
import React from 'react'
import './ContactInfo.css'
import { Col, Container, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoArrowForward } from 'react-icons/io5';




export default function ContactInfo() {
    return (
        <>
           <Container>
            <Row>
                <Col lg={6} md={12}>
                    <div className='ContactSection-Call-Col-1'>
                        <div className='ContactSection-Call'>
                            <div className='ContactSection-Call-icon'>
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <p>CallUs7/24</p>
                                <p className='ContactSection-Call-p'>+208-555-0112</p>
                            </div>
                        </div>
                        <div className='ContactSection-Call'>
                            <div className='ContactSection-Call-icon'>
                                <MdEmail />
                            </div>
                            <div>
                                <p>Make a Quote</p>
                                <p className='ContactSection-Call-p'>Infotech@gmail.com</p>
                            </div>
                        </div>
                        <div className='ContactSection-Call'>
                            <div className='ContactSection-Call-icon'>
                                <FaLocationDot />
                            </div>
                            <div>
                                <p>Location</p>
                                <p className='ContactSection-Call-p'>4517 Washington ave.</p>
                            </div>
                        </div>
                        <div className='vid-iframe-div'>
                            <iframe className='vid-iframe'  width="100%" height="350px" src="https://www.youtube.com/embed/fk6Kv7UrFQA?si=HHtI2SQ0DTlxzwUz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </Col>
                <Col className='ContactSection-Call-Col-2' lg={6} md={12}>
                    <h2>Ready to Get Started?</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam sapiente asperiores 
                        dolorem neque magni debitis laborum, 
                        eos aliquid explicabo natus?
                    </p>
                    <form>
                        <Row>
                            <Col className='input-form' lg={6} md={12}>
                                    <label htmlFor="name">Your Name*</label>
                                    <input id='name' type="text" />
                            </Col>
                            <Col className='i   nput-form' lg={6} md={12}>
                                    <label htmlFor="email">Your Email*</label>
                                    <input id='email' type="text" />
                            </Col>
                        </Row>  
                        <Row className='input-form'>
                            <Col sm={12}>
                                <label htmlFor="message">Write Message*</label>
                                <textarea id='message' rows={4}/>
                            </Col>
                        </Row>
                        <button>Send Message <IoArrowForward /></button>
                    </form>
                </Col>
            </Row>
            </Container>
            <div className='ContactSection-Map'>
            <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7990.66492633138!2d35.801606!3d35.528989!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1526ada7c38f8879%3A0x5f66e4e99dbb7a47!2sfocal%20X%20agency!5e1!3m2!1sen!2sro!4v1728479444250!5m2!1sen!2sro" width="100%" height="700px" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>            </div>
        </>
    )
}
