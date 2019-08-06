import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
// import Image from "../components/image"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import Spotlight from "../components/spotlight"
import Midsection from "../components/midsection"

const BlogPost = ({ node }) => {
  return (
    <li>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <img src={node.featureImage.fixed.src} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <span>{node.content.childMarkdownRemark.excerpt} </span>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="text-center">
          <Button variant="outline-dark" className="text-center">
            <Link to={node.slug}>{node.title}</Link>{" "}
            <FontAwesomeIcon icon={faChevronRight} size="1x" />
          </Button>
        </Col>
      </Row>
    </li>
  )
}
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Dezine It! Home" />
    <Carousel />
    <Spotlight />
    <Midsection />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    {/* <hr className="body-hr" /> */}
    <Container fluid className="blog-container">
      {" "}
      <ul className="blog-post">
        {data.allContentfulBlog.edges.map(edge => (
          <BlogPost node={edge.node} />
        ))}
      </ul>
    </Container>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          content {
            childMarkdownRemark {
              excerpt
            }
          }
          featureImage {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`
