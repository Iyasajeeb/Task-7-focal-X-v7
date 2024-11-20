// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer2.css'
import FooterComponent1 from '../FooterComponent1/FooterComponent1'
import FooterComponent2 from '../FooterComponent2/FooterComponent2'
import { Col, Container, Row } from 'react-bootstrap'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
export default function Footer2() {
    return (

        <>

            <section className='ContactInformation-Section'>
                <Container >
                    <Row className='ContactInformation-Row'>
                        <Col lg={4} md={12} className='ContactInformation-Col'>
                            <div className='ContactInformation-Col-Div'>
                                <div className='ContactInformation-Col-Div-Icon'>
                                    <FaLocationDot />
                                </div>
                                <div>
                                    <p>Address</p>
                                    <p className='ContactInformation-Col-Div-P'>4648 Rocky Road Philadelphia PA</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={12} className='ContactInformation-Col'>
                            <div className='ContactInformation-Col-Div'>
                                <div className='ContactInformation-Col-Div-Icon'>
                                    <MdEmail />
                                </div>
                                <div>
                                    <p>Send Email</p>
                                    <p className='ContactInformation-Col-Div-P'>Info@example.com</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={12} className='ContactInformation-Col'>
                            <div className='ContactInformation-Col-Div'>
                                <div className='ContactInformation-Col-Div-Icon'>
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <p>Call Emergency</p>
                                    <p className='ContactInformation-Col-Div-P'>+88 0123 654 99</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <div className='Footer'>

                <FooterComponent1 />
            </div>
            <div className='Footer-2'>
                <FooterComponent2 />
            </div>

        </>)
}
