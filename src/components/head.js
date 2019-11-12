import React from "react"
import { Helmet } from "react-helmet"

const Head = props => {
  let title = ""
  props.blog
    ? (title = props.pageTitle)
    : (title = "Hamdi Lachaal - " + props.pageTitle)
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={props.pageDescription} />
    </Helmet>
  )
}

export default Head
