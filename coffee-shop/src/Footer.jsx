import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
function Footer() {
  return (
    <div>
        <Container fluid className='bg-dark mt-3 text-white p-5 footer'>
            <Row>
                <Col>
                <h3 className='fw-bold text-decoration-underline'>About</h3>
                <p>Grand Coffee isn't just a coffee shop, it's a heaven for coffee lovers. We're passionate about creating an experience that goes beyond your daily cup of joy.<br/> Grand Coffee is your one-stop shop for exceptional coffee, inviting ambiance, and a warm, welcoming atmosphere.</p>
                </Col>

                <Col>
                <h3 className='fw-bold text-decoration-underline '>Menu</h3>
                <ul className='list-unstyled mt-3'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About us</Link></li>
                    <li><Link to='/Gallery'>Gallery</Link></li>
                    <li><Link to='/Services'>Services</Link></li>
                    <li><Link to='/Contact'>Contact us</Link></li>
                </ul>
                </Col>

                <Col>
                <h3 className='fw-bold text-decoration-underline'>Follow Us</h3>
                <ul className='list-unstyled mt-3'>
                    <li><a href='#'><FaSquareXTwitter className='me-2' />Twitter</a></li>
                    <li><a href='#'><FaFacebookSquare  className='me-2' />Facebook</a></li>
                    <li><a href='#'><FaSquareInstagram  className='me-2' />Instagram</a></li>
                    <li><a href='#'><FaSquareWhatsapp  className='me-2' />Whatsapp</a></li>
                    
                   
                </ul>
                </Col>

                <Col>
                <h3 className='fw-bold text-decoration-underline'>Address & Contact</h3>
                <ul className='list-unstyled  mt-3'>
                    <li><a href='#'><FaLocationDot className='me-2' />Address:Shivaji Nagar Pune</a></li>
                    <li><a href='#'><IoIosCall className='me-2' />Call: +01 1234567890</a></li>
                    <li><a href='#'><IoIosMail className='me-2' />Email:grandCoffee@gmail.com</a></li>
                </ul>
                
                </Col>
            </Row>
            <p className='text-center'>&copy; 2025 Grand Coffee. All Rights Reserved - Developed by Ganesh Mane.</p>
        </Container>
    </div>
  )
}

export default Footer