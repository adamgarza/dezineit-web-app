import React, { Component } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import SEO from "../components/seo"
import Layout from "../components/layout"
import "./contact.css"

class contact extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Contact Us | Dezine It!" />
        <Container fluid className="contact-form">
          <Row>
            <Col xs={12} sm={12} md={2} lg={2} />
            <Col xs={12} sm={12} md={8} lg={8}>
              <h1 className="text-center">Contact Us</h1>
              <hr className="body-hr" />
              <Form id="contact-form" name="contact-form">
                <Form.Row>
                  <Col>
                    <Form.Group controlId="fname">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        id="fname"
                        name="fname"
                        type="text"
                        placeholder="First"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="lname">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        id="lname"
                        name="lname"
                        type="text"
                        placeholder="Last"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>

                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    id="email"
                    name="email"
                    type="text"
                    placeholder="email@example.com"
                    required
                  />
                  <Form.Text className="text-muted">
                    We do not share your email with anyone.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    id="message"
                    name="message"
                    type="textarea"
                    as="textarea"
                    placeholder="Message"
                    row="6"
                    required
                  />
                </Form.Group>

                <Button variant="light" type="submit" value="Submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col xs={12} sm={12} md={2} lg={2} className="home-col-spacer" />
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default contact