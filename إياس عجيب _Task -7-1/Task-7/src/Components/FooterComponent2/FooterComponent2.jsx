/* eslint-disable no-unused-vars */
import React from 'react'
import './FooterComponent2.css'
import {Container } from 'react-bootstrap'

export default function FooterComponent2() {
    return (
        <Container className='Footer-Component-2'>
            <div className='Footer-Component-2-left'>
                <p>&copy; All Copyright 2024 by Extech</p>
            </div>
            <div className='Footer-Component-2-right'>
                <div>
                    <p>Terms & Condition</p>
                </div>
                <div>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </Container>
    )
}
