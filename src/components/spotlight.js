import React, { Component } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import image from "../images/spotlight-image.svg"
import "./spotlight.css"

class spotlight extends Component {
  render() {
    return (
      <Container fluid className="spotlight-container">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} className="text-center">
            <img
              src={image}
              width="100%"
              // height="384"
              alt="spotlight shirt designs by Dezine It!"
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="spotlight-right">
            <span>Welcome to</span>
            <h1>Dezine It!</h1>

            <p className="spotlight-p">
              Snag go-to looks for a new school year, for a special event, for
              your organization or team sports. Need some ideas? We got you - we
              provide custom design work! Mix and match styles for a modern new
              look.
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default spotlight
