import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Services() {
    return (
        <div className='bgimg'>
            <Container className='text-center text-white my-5 p-5' >
                <h1 className='fw-bold'>Services</h1>
                <p className='fw-bold text-black fs-5'>
                "Enjoy expertly brewed coffee with a cozy ambiance, perfect for work, study, or relaxation."☕😊</p>
                <Row>

                    <Col>
                        <Card style={{ width: '20rem' }} className='border-0 p-3'>
                            <img src='./images/icon1.png' className='mx-auto d-block p-4' alt='' />
                            <Card.Body>
                                <Card.Title className='fs-2 mb-2'>Cozy Work & Study Space </Card.Title>
                                <Card.Text>
                                Free Wi-Fi and comfortable seating for remote workers and students.
                                </Card.Text>
                                <Button variant="dark" className='px-5 mt-4 mx-auto'>READ MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '20rem' }} className='border-0 p-3'>
                            <img src='./images/icon2.png' className='mx-auto d-block p-1' alt='' />
                            <Card.Body>
                                <Card.Title className='fs-2 mb-3'>Coffee Tasting & Workshops</Card.Title>
                                <Card.Text>
                                Learn about different coffee beans, brewing methods, and tasting techniques.
                                </Card.Text>
                                <Button variant="dark" className='px-5 mt-4 mx-auto'>READ MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '20rem' }} className='border-0 p-3'>
                            <img src='./images/icon3.png' className='mx-auto d-block' alt='' />
                            <Card.Body>
                                <Card.Title className='fs-2 mb-3'>Loyalty Program & Discounts</Card.Title>
                                <Card.Text>
                                Reward frequent customers with discounts, free drinks, and exclusive perks.
                                </Card.Text>
                                <Button variant="dark" className='px-5 mt-4 mx-auto'>READ MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default Services