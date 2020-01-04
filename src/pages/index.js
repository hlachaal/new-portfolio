import React from "react"
import { Link } from "gatsby"
import hamdi from "../images/pic_index.svg"

import Head from "../components/head"
import Footer from "../components/footer"

import indexStyles from "./index.module.scss"

const IndexPage = ({ data }) => {
  return (
    <div className={indexStyles.indexContainer}>
      <Head pageTitle={""} pageDescription="" />
    </div>
  )
}

export default IndexPage
