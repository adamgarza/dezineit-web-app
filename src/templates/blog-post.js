import React, { Component } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPost extends Component {
  render() {
    const { title, content, featureImage } = this.props.data.contentfulBlog
    return (
      <Layout>
        <SEO title={title} />
        <Container className="post-container blog-container">
          <Row className="text-center blog-title-row">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h1>{title}</h1>
              <hr className="body-hr" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={1} lg={1}></Col>
            <Col xs={12} sm={12} md={5} lg={5} className="blog-post-container">
              <img src={featureImage.fixed.src} />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={5}
              lg={5}
              dangerouslySetInnerHTML={{
                __html: content.childMarkdownRemark.html,
              }}
            />
            <Col xs={12} sm={12} md={1} lg={1}></Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}
export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      content {
        childMarkdownRemark {
          html
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
`
