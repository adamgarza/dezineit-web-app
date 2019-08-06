import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container fluid className="page-not-found-container">
      <Row className="text-center">
        <Col xs={3} sm={3} md={3} lg={3}></Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}></Col>
      </Row>
    </Container>
  </Layout>
)

export default NotFoundPage
