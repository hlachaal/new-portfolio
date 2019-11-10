import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <p className={footerStyles.copyRight}>
        Created by {data.site.siteMetadata.author}, © 2019{"   "}
      </p>
      <p className={footerStyles.socialMedia}>
        <span>
          <a href="https://github.com/hlachaal">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </span>
        {/* <span>
          <a href="https://linkedin.com/in/hlachaal/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </span> */}
      </p>
    </footer>
  )
}
export default Footer
