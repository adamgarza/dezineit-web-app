import React, { Component } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import "./midsection.css"

class midsection extends Component {
  render() {
    return (
      <Container fluid className="midsection-container text-center my-auto">
        <Row className="h-100">
          <Col xs={12} sm={12} md={12} lg={12} className="my-auto">
            <p>Need design help? We offer design services.</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default midsection
