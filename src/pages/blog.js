import React from "react"
import Layout from "../components/layout"
import { useStaticQuery } from "gatsby"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import blogStyles from "./blog.module.scss"
import { BLOCKS } from "@contentful/rich-text-types"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: creationDate, order: DESC }) {
        edges {
          node {
            slug
            title
            creationDate(formatString: "MMMM Do, YYYY")
            image {
              fluid(maxWidth: 230, maxHeight: 150) {
                sizes
                src
                srcSet
                base64
                srcWebp
                srcSetWebp
                tracedSVG
                aspectRatio
              }
              description
            }
            content {
              json
            }
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  //console.log(data)
  return (
    <Layout>
      <ol>
        {data.allContentfulBlogPost.edges.map((edge, idx) => {
          let paragraph = ""
          const options = {
            renderNode: {
              [BLOCKS.PARAGRAPH]: (node, children) => {
                if (paragraph === "") {
                  node.content.forEach(item => {
                    if (item.value !== "") {
                      paragraph = paragraph + item.value + " "
                    }
                  })
                  return paragraph.slice(0, 150) + "..."
                }
              },
            },
          }
          return (
            <li key={idx}>
              <Link to={`/blog/${edge.node.slug}`}>
                <div className={blogStyles.text}>
                  <h2>{edge.node.title}</h2>
                  <p className={blogStyles.creationDate}>
                    By{" "}
                    {data.site.siteMetadata.author +
                      " on " +
                      edge.node.creationDate}
                  </p>
                  <div className={blogStyles.intro}>
                    {documentToReactComponents(
                      edge.node.content.json,
                      options
                    ).slice(0, 100)}
                  </div>
                </div>
              </Link>
              <hr className={blogStyles.itemsDivider} />
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
export default BlogPage
