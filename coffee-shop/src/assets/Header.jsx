// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { FaShoppingBag } from "react-icons/fa";
// import { cartState } from './Context';
// import { Form } from 'react-bootstrap/';


// function Header() {
//   const{state:{cart},productdispatch}=cartState()
//   return (
//     <div>
//              <Navbar bg="dark" data-bs-theme="dark" className='fixed-'>
//           <Container>
//           <Navbar.Brand to="/" ><img className='' src='./images/logo.png' alt=''/></Navbar.Brand>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//               style={{"width":"300px"}}
//               onChange={(e)=>{
//                 productdispatch({
//                   type:"filterbysearch",
//                   payload:e.target.value
//                 })
//               }}
//             />
            
//           </Form>
//           <Nav className="">
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/About">About Us</NavLink>
//             <NavLink to="/Gallery">Gallery</NavLink>
//             <NavLink to="/Services">Services</NavLink>
//             <NavLink to="/Contact">Contact Us</NavLink>
//             <NavLink to="/Cart"><FaShoppingBag /><sup>{cart.length}</sup></NavLink>
//           </Nav>
//         </Container>
//       </Navbar>

//     </div>
//   )
// }

// export default Header


import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingBag } from "react-icons/fa";
import { cartState } from './Context';
import { Form } from 'react-bootstrap/';

function Header() {
  const { state: { cart }, productdispatch } = cartState()
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className='fixed-' expand="lg">
        <Container>
          <Navbar.Brand to="/" ><img className='' src='./images/logo.png' alt=''/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex me-auto">
              <Form.Control
                type="search"
                placeholder="Search"
                className="mx-5 "
                aria-label="Search"
                style={{ "width": "300px" }}
                onChange={(e) => {
                  productdispatch({
                    type: "filterbysearch",
                    payload: e.target.value
                  })
                }}
              />
            </Form>
            <Nav className="ms-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/About">About Us</NavLink>
              <NavLink to="/Gallery">Gallery</NavLink>
              <NavLink to="/Services">Services</NavLink>
              <NavLink to="/Contact">Contact Us</NavLink>
              <NavLink to="/Cart"><FaShoppingBag /><sup>{cart.length}</sup></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header