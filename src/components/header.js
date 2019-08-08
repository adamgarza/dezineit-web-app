// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/dezineit-logo.svg"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./header.css"

const Header = ({ siteTitle }) => (
  <Navbar
    fluid
    collapseOnSelect
    default
    expand="lg"
    sticky="top"
    variant="dark"
  >
    <Navbar.Brand href="/">
      <h1 className="nav-brand">
        <a href="/" className="brand">
          <img
            alt="Dezine It! logo"
            src={logo}
            width="90"
            className="d-inline-block align-middle brand-logo"
          />
          {siteTitle}
        </a>
      </h1>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto" />
      <Nav className="justify-content-end">
        <Nav.Link href="/ecpd">ECPD</Nav.Link>
        <Nav.Link href="/kouts">Town of Kouts</Nav.Link>
        <Nav.Link href="/ecfd">ECFD</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
