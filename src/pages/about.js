import React, { Component } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "../images/dezineit-full-logo.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./about.css"

class about extends Component {
  render() {
    return (
      <Layout>
        <SEO title="About Us | Dezine It!" />

        <Container className="about-container text-justify">
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} className="about-col-left">
              <img src={Image} alt="Dezine It! logo" height="450" />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h1 className="text-center">About Us</h1>
              <hr className="body-hr" />{" "}
              <p>
                At Dezine It! - we specialize in custom unique shirt designs. Do
                you need design help? You're in good compamy. We have graphic
                designers who get to know your by name and understands your
                brand and changing business needs. Our intuitive designers make
                it easy to request and manage your designs and scale up as you
                grow.
              </p>
              <p>
                We started this company in 2010 out of our basement. This
                family-owned company provides great service and high quality
                apparel to everyone that shops with us. To expand the
                availability of our top-quality merchandise and enhance our
                customer service we proudly launched our online store. Through
                the addition of this e-commerce feature we are better able to
                meet your demands, while providing the same great service and
                attention to detail that you've come to expect from us.
              </p>
              <p>
                As a small business, we fully believe that every customer is
                important. Every customer receives premier service from our
                sales team, and quality workmanship with a customer-centric
                philosophy and an strong emphasis on attention to detail.
              </p>
              <p>
                Contact us today with any comments, questions, concerns, or
                simply request information about the services we provide. You
                can also place your ordering using the convenient online catalog
                and experience for yourself the service and quality that all our
                clients receive year after year. Your total satisfaction is our
                goal.
              </p>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default about
