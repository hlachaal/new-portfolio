import React from "react"

import Head from "../components/head"

import indexStyles from "./index.module.scss"

const IndexPage = ({ data }) => {
  return (
    <div className={indexStyles.indexContainer}>
      <Head pageTitle={"Under construction"} pageDescription="Web developer." />
      <div className={indexStyles.indexContent}>
        <div>
          <p>Website under construction.</p>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
