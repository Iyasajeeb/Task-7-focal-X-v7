// eslint-disable-next-line no-unused-vars
import React from 'react'
import './BlogAndNews.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap'
import SectionTitle from '../SectionTitle/SectionTitle';
import BlogAndNewsCard from '../BlogAndNewsCard/BlogAndNewsCard';


function BlogAndNews() {
    return (
        <>
            <Container className='BlogAndNews'>
                <SectionTitle
                    sectionName={"BLOG & NEWS"}
                    sectionTitle={"Feature News And Insights"}
                />
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <BlogAndNewsCard
                            cardPhoto={'/public/img/blogThumb1_2.webp'}
                            categoryCard={"Uncategorized"}
                            date={"MARCH 14,2024"}
                            adminPhoto={'/public/img/blogProfile1_2.webp'}
                            adminName={"Admin"}
                            aboutAdmin={"Co,Founder"}
                        />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <BlogAndNewsCard
                            cardPhoto={'/public/img/blogThumb1_3.webp'}
                            categoryCard={"Technology"}
                            date={"MARCH 29,2024"}
                            adminPhoto={'/public/img/blogProfile1_3.webp'}
                            adminName={"Admin"}
                            aboutAdmin={"Co,Founder"}
                        />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <BlogAndNewsCard
                            cardPhoto={'/public/img/blogThumb1_1.webp'}
                            categoryCard={"Shared Hosting"}
                            date={"MARCH 24,2024"}
                            adminPhoto={'/public/img/blogProfile1_1.webp'}
                            adminName={"Admin"}
                            aboutAdmin={"Co,Founder"}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BlogAndNews
