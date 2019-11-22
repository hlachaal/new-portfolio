import React from "react"
import Layout from "../components/layout"
import workStyles from "./work.module.scss"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const WorkPage = ({ data }) => {
  return (
    <Layout
      pageTitle="Work sample"
      pageDescription="Some of the web programming projects that I worked on."
    >
      <div className={workStyles.workContainer}>
        <div className={workStyles.workItem}>
          <div className={workStyles.itemText}>
            <h3>Current portfolio</h3>
            <p>Developed from scratch with Gatsby.</p>
            <ul className={workStyles.contentSkills}>
              <li>HTML</li>
              <li>CSS3</li>
              <li>React</li>
              <li>Gatsby</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div className={workStyles.itemImage}>
            <Img fluid={data.website.childImageSharp.fluid} />
          </div>
        </div>

        <div className={workStyles.workItem}>
          <div className={workStyles.itemText}>
            <h3>Waitz</h3>
            <p>
              Worked with Occuspace team on the front-end of the new version of
              Waitz. Tech used: JavaScript, React Native, GitHub.
            </p>
            <ul className={workStyles.contentSkills}>
              <li>HTML</li>
              <li>CSS</li>
              <li>Styled Components</li>
              <li>React Native</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div className={workStyles.itemImage}>
            <Img fluid={data.waitz.childImageSharp.fluid} />
          </div>
        </div>

        <div className={workStyles.workItem}>
          <div className={workStyles.itemText}>
            <h3>Previous portfolio</h3>
            <p>
              Designed and developed a one-page portfolio with React components.
              In this project I was focused on animations and the esthetic
              aspects.
            </p>
            <ul className={workStyles.contentSkills}>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Canvas</li>
            </ul>
          </div>
          <div className={workStyles.itemImage}>
            <Img fluid={data.pportfolio.childImageSharp.fluid} />
          </div>
        </div>

        <div className={workStyles.workItem}>
          <div className={workStyles.itemText}>
            <h3>Caller Id Reputation</h3>
            <p>
              - Participated in the conversion of the mock-up to a WordPress
              theme.
              <br />- Integrated Nexmo API to the WordPress website wi.
            </p>
            <ul className={workStyles.contentSkills}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>WordPress</li>
              <li>PHP</li>
            </ul>
          </div>
          <div className={workStyles.itemImage}>
            <Img fluid={data.calleridreputation.childImageSharp.fluid} />
          </div>
        </div>

        <div className={workStyles.workItem}>
          <div className={workStyles.itemText}>
            <h3>Digital Referral CRM</h3>
            <p>
              - Created the dashboard template basing on Twitter Bootstrap.
              <br />- Developed the back-end with CodeIgniter PHP MVC framework
              utilizing its useful libraries such as calendaring class, file
              uploading class, form validation, pagination class...
              <br />- Developed and integrated a chat platform to the dashboard
              using Node.js
            </p>
            <ul className={workStyles.contentSkills}>
              <li>PHP</li>
              <li>MySQL</li>
              <li>Node.js</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className={workStyles.itemImage}>
            <Img fluid={data.crm.childImageSharp.fluid} />
          </div>
        </div>

        <div className={workStyles.workItem}>
          <div className={workStyles.itemText}>
            <h3>MCA Architects</h3>
            <p>
              - Worked with the SEO team on refactoring the url structure and
              setting up all different type of url forwarding.
              <br />
              - Created the website HTML / CSS template considering a responsive
              web design.
              <br />- Participated in the backend development with CakePHP.
            </p>
            <ul className={workStyles.contentSkills}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className={workStyles.itemImage}>
            <Img fluid={data.mca.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    mca: file(relativePath: { eq: "images/work/mca-architects.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    crm: file(relativePath: { eq: "images/work/crm.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    calleridreputation: file(
      relativePath: { eq: "images/work/calleridreputation.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pportfolio: file(relativePath: { eq: "images/work/old-portfolio.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    waitz: file(relativePath: { eq: "images/work/ucsd-waitz.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    website: file(relativePath: { eq: "images/work/my-website.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default WorkPage
