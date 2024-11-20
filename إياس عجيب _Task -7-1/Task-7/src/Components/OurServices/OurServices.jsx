import { Col, Container, Row } from 'react-bootstrap'
import './OurServices.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import OurServicesCard1 from '../OurServicesCard1/OurServicesCard1'
import OurServicesCard2 from '../OurServicesCard2/OurServicesCard2'


export default function OurServices() {
    return (

        <>
            <Container className='OurServices'>
                <SectionTitle
                    sectionName={"OUR SERVICES"}
                    sectionTitle={"Elevating BusinessesWith IT Ingenuity"}
                />
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <OurServicesCard1
                            icon={'/public/img/serviceIcon1_2.svg'}
                            title={"Woo Commerce"}
                            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vel?"}
                        />
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <OurServicesCard1
                            icon={'/public/img/serviceIcon1_3.svg'}
                            title={"CEM Solutions"}
                            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vel?"}
                        />
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <OurServicesCard1
                            icon={'/public/img/serviceIcon1_4.svg'}
                            title={"Web Design"}
                            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vel?"}
                        />
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <OurServicesCard1
                            icon={'/public/img/serviceIcon1_1.svg'}
                            title={"Data Guard Sentinel"}
                            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vel?"}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <iframe className='iframe' width="80%" height="580" src="https://www.youtube.com/embed/fk6Kv7UrFQA?si=HHtI2SQ0DTlxzwUz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
            <div className='Our-Services-Cards-2'>
                <Container >
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                            <OurServicesCard2
                                CardNumber={"01"}
                                title={"Requirement"}
                                des={"There are many variations of passages of Lorem Ipsum available ,but th majority have suffered alteration"}

                            />
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <OurServicesCard2
                                CardNumber={"02"}
                                title={"UI/UX Design"}
                                des={"There are many variations of passages of Lorem Ipsum available ,but th majority have suffered alteration"}

                            />
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <OurServicesCard2
                                CardNumber={"03"}
                                title={"Prototype"}
                                des={"There are many variations of passages of Lorem Ipsum available ,but th majority have suffered alteration"}

                            />
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <OurServicesCard2
                                CardNumber={"04"}
                                title={"Development"}
                                des={"There are many variations of passages of Lorem Ipsum available ,but th majority have suffered alteration"}

                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
