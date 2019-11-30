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
          <div className={resumeStyles.left}>
            <div className={resumeStyles.resumeItem}>
              <div className={resumeStyles.itemHeader}>Summary</div>
              <p className={resumeStyles.summary}>
                Focusing on the front-end web and mobile development utilizing
                JavaScript frameworks. Looking for a front-end developer
                position where to provide my best work quality and give a plus
                to the product while sharpening my skills and learning anew.{" "}
              </p>
            </div>

            <div className={resumeStyles.resumeItem}>
              <div className={resumeStyles.itemHeader}>Experience</div>
              <div className={resumeStyles.expItem}>
                <div className={resumeStyles.itemSubHeader}>
                  <div className={resumeStyles.subHeaderTitle}>
                    Web Developer - Freelance
                  </div>
                  <div className={resumeStyles.subHeaderTime}>
                    Jan 2018 - Present
                  </div>
                </div>

                <p>
                  - Participated in the development of web projects with React.
                  <br />
                  - Worked with APIs to manage provided data and use it in
                  WordPress website.
                  <br />
                  - Translated mock-ups into fully functioning and responsive
                  web pages.
                  <br />- Refactored JavaScript code to ES6 standards.
                </p>
                <ul className={resumeStyles.contentSkills}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>GraphQL</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>WordPress</li>
                  <li>Git</li>
                </ul>
              </div>

              <div className={resumeStyles.expItem}>
                <div className={resumeStyles.itemSubHeader}>
                  <div className={resumeStyles.subHeaderTitle}>
                    Web Developer - Freelance
                  </div>
                  <div className={resumeStyles.subHeaderTime}>
                    Jan 2018 - Present
                  </div>
                </div>

                <p>
                  - Participated in the development of web projects with React.
                  <br />
                  - Worked with APIs to manage provided data and use it in
                  WordPress website.
                  <br />
                  - Translated mock-ups into fully functioning and responsive
                  web pages.
                  <br />- Refactored JavaScript code to ES6 standards.
                </p>
                <ul className={resumeStyles.contentSkills}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>GraphQL</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>WordPress</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={resumeStyles.right}></div>
        </div>
      </div>
    </Layout>
  )
}

export default ResumePage
