import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

// const navItems = [
   
//     {
//       title: "About",
//       path: "/about",
//     },
//     {
//       title: "ContactUs",
//       path: "/contactus",
//     },
//   ];


const MyNavbar=(props)=> {
  return (
    <Navbar collapseOnSelect expand="lg" bg={props.mode} variant={props.mode}>
     
        <Navbar.Brand href="/Home">JB-Jordar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/ContactUs">ContactUs</Nav.Link>

            <NavDropdown title="Services" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/TextConverter">TextConverter</NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/UseReducer">UseRedcerHook</NavDropdown.Item>
              <NavDropdown.Item href="#services/3.2">React</NavDropdown.Item>
              <NavDropdown.Item href="#services/3.3">Three.js</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#services/3.4">NodeJs</NavDropdown.Item>
              <NavDropdown.Item href="#services/3.5">MongoDb</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#signup">SignUp</Nav.Link>
            <Nav.Link eventKey={2} href="#login">Login</Nav.Link>
            <Form.Check className='my-2 mx-2' 
            type="switch"
            id="custom-switch"
            label="Change Theme"
            onClick={props.toggleTheme}
      />    
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;