import React, { Component } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import TheFewLogo from "../images/creative-few-logo.svg"
import Facebook from "../images/facebook-logo.svg"
import Insta from "../images/instagram-logo.svg"
import "./footer.css"

class footer extends Component {
  render() {
    return (
      <footer className="sticky-bottom footer">
        <Row className="footer-upper text-center align-middle">
          <Col xs={12} sm={12} md={12} lg={3}>
            © {new Date().getFullYear()} - Dezine It! LLC.
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <ul>
              <li>7514 Missouri Ave</li>
              <li>Hammond, IN 46323</li>
              <li>219-805-6534</li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={12} lg={3}>
            <a href="https://www.instagram.com/dezineit/" target="_new">
              <img
                src={Insta}
                alt="Instagram logo"
                width="45"
                hight="45"
                style={{ paddingRight: `15px` }}
              />
            </a>
            <a
              href="https://www.facebook.com/DezineIt219/?ref=aymt_homepage_panel"
              target="_new"
            >
              <img
                src={Facebook}
                alt="Facebook logo"
                width="45"
                hight="45"
                style={{ paddingRight: `15px` }}
              />
            </a>
          </Col>
        </Row>

        <Row className="footer-lower text-center align-middle">
          <Col xs={12} md={12} lg={12}>
            <span>
              Developer:{" "}
              <a href="http://www.thecreativefew.com/">
                <img
                  src={TheFewLogo}
                  className="the-few-logo"
                  alt="The Creative Few logo"
                  width="40"
                />{" "}
                The Creative Few
              </a>
            </span>
          </Col>
        </Row>
      </footer>
    )
  }
}

export default footer
