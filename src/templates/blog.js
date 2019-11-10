import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Img from "gatsby-image"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      creationDate(formatString: "MMMM Do, YYYY")
      content {
        json
      }
    }
    contentfulAsset(title: { eq: $slug }) {
      title
      fluid(maxWidth: 1024) {
        ...GatsbyContentfulFluid
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`
const Blog = props => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <img
          src={node.data.target.fields.file["en-US"].url}
          alt={node.data.target.fields.title["en-US"]}
        />
      ),
    },
  }
  return (
    <Layout>
      <div className={blogStyles.blogHeader}>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <hr />
        <p className={blogStyles.creationDate}>
          By{" "}
          {props.data.site.siteMetadata.author +
            " on " +
            props.data.contentfulBlogPost.creationDate}
        </p>
      </div>
      <div className={blogStyles.paragraph}>
        {documentToReactComponents(
          props.data.contentfulBlogPost.content.json,
          options
        )}
      </div>
      <div className={blogStyles.imageContainer}>
        <Img fluid={props.data.contentfulAsset.fluid} />
      </div>
    </Layout>
  )
}

export default Blog
