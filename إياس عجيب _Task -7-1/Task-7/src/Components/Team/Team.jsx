// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Team.css'
import { Col, Container, Row } from 'react-bootstrap'
import AboutCard from '../AboutCard/AboutCard'
import SectionTitle from '../SectionTitle/SectionTitle'
import { HiArrowSmRight } from 'react-icons/hi'


function Team() {
    return (
        <Container className='Team'>

            <SectionTitle
                sectionName={"TEAM MEMBERS"}
                sectionTitle={"Our Dedicated Team Members"}
            />

            <div className='AllMembers-button'>

                <button> All Members<HiArrowSmRight className='' /></button>

            </div>

            <Row>
                <Col lg={3} md={6} sm={12}>
                    <AboutCard
                        AboutCardName={"masirul Islam"}
                        AboutCardParagraph={"Web Design"}
                        AboutCardImage={'/public/img/04.webp'}
                    />
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <AboutCard
                        AboutCardName={"Jessica Mardol"}
                        AboutCardParagraph={"Cyber Expert"}
                        AboutCardImage={'/public/img/05.webp'}
                    />
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <AboutCard
                        AboutCardName={"Arnold Hemingway"}
                        AboutCardParagraph={"Web Expert"}
                        AboutCardImage={'/public/img/06.webp'}
                    />
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <AboutCard
                        AboutCardName={"Shikon Haque"}
                        AboutCardParagraph={"Data Analyst"}
                        AboutCardImage={'/public/img/07.webp'}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Team