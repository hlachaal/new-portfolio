import React from "react"
import Layout from "../components/layout"
import resumeStyles from "./resume.module.scss"

const ResumePage = () => {
  return (
    <Layout pageTitle="Resume" pageDescription="CV">
      <div className={resumeStyles.resumeContainer}>
        <div className={resumeStyles.resumeHeader}>
          <h1>Hamdi Lachaal</h1>
          <h2>Web Developer</h2>
        </div>
        <div className={resumeStyles.content}>
          <div className={resumeStyles.left}></div>
          <div className={resumeStyles.right}></div>
        </div>
      </div>
    </Layout>
  )
}

export default ResumePage
