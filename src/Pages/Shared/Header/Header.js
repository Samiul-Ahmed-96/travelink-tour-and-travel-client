import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../Images/Travelink Logo.png";
import "./Header.css";
const Header = () => {
  //destructuring value
  const { user, handleSignOut, admin } = useAuth();
  return (
    <div>
      <Navbar sticky="top" className="header" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={HashLink} to="/home">
            <img src={logo} alt="Travelink" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/home">Home</Link>

              {admin ? (
                <div>
                  <Link to="/manageAllOrder">Manage All Bookings</Link>

                  <Link to="/addPakage">Add Pakage</Link>
                  <Link to="/makeAdmin">Make Admin</Link>
                </div>
              ) : (
                <div>
                  <HashLink to="/home#tourpakages">Tour Pakages</HashLink>
                  <HashLink to="/home#destination">Destination</HashLink>
                  <HashLink to="/home#gallary">Gallary</HashLink>
                  {user.email && <Link to="/myOrders">My Pakages</Link>}
                </div>
              )}
            </Nav>
            <Nav>
              <li>{user?.displayName}</li>
              {user.email ? (
                <button onClick={handleSignOut}>
                  Sign out <i class="fas fa-sign-out-alt"></i>
                </button>
              ) : (
                <Link className="ls-btn" to="/login">
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
