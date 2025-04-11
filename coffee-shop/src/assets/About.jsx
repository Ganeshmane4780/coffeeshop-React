import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function About() {
  return (
    <div>
      <Container>
        <Row>
            <Col>
              <h1 style={{color:"orangered"}} className='fw-bolder p-5'>ABOUT US</h1>
              <p className='py-3 fs-5'>Grand Coffee isn't just a coffee shop, it's a heaven for coffee lovers.</p>
              <p className='pb-3 fs-5'> We're passionate about creating an experience that goes beyond your daily cup of joy.
              Grand Coffee is your one-stop shop for exceptional coffee, inviting ambiance, and a warm, welcoming atmosphere.</p>
                <Button variant='dark' className='p-3 px-5 btn1 fs-5'>Read More</Button>
            </Col>
            <Col>
            <img src='./images/about-img.png' className='img-fluid mx-auto d-block w-100 p-5'/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About