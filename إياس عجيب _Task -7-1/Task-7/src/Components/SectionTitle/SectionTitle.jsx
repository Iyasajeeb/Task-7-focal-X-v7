/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./SectionTitle.css";
import { Col, Container, Row } from "react-bootstrap";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function SectionTitle({ sectionName , sectionTitle }) {
    return (
        <>
            <Container className="title" />
            <div className="section-name">
                <HiOutlineArrowNarrowLeft />
                <h2>{sectionName}</h2>
                <HiOutlineArrowNarrowRight />
            </div>
            <Row className="title-row">
                <Col lg={6} md={12}>
                <p>{sectionTitle}</p>
                </Col>
            </Row>
        </>
    );
}
