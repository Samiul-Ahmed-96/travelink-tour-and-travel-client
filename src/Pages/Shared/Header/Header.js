import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../Images/Travelink Logo.png';
import './Header.css';
const Header = () => {
    return (
    <div>
    <Navbar sticky="top" className="header"  collapseOnSelect expand="lg" >
        <Container>
        <Navbar.Brand as={HashLink} to="/home"><img src={logo} alt="Travelink" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Link to="/home">Home</Link>
            <HashLink to="/home#tourpakages">Tour Pakages</HashLink>
            <HashLink to="/myOrders">My Orders</HashLink>
            <HashLink to="/manageAllOrder">Manage All Orders</HashLink>
            <Link to="/addPakage">Add Pakage</Link>
        </Nav>
        <Nav>
            <li>User</li>
            <button>Sign out <i class="fas fa-sign-out-alt"></i></button>   
            <Link className='ls-btn' to="/login">Login</Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
    );
};

export default Header;