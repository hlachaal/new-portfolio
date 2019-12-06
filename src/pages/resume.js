import React from "react"
import Layout from "../components/layout"
import resumeStyles from "./resume.module.scss"

const ResumePage = () => {
  return (
    <Layout pageTitle="Resume" pageDescription="CV">
      <div className={resumeStyles.resumeContainer}>
        <div className={resumeStyles.resumeHeader}>
          {/* <h1>Hamdi Lachaal</h1>
          <h2>Web Developer</h2> */}
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
                    Front-end Developer - Occuspace
                  </div>
                  <div className={resumeStyles.subHeaderTime}>
                    JUl 2019 - Sep 2019
                  </div>
                </div>

                <p>
                  - Worked with team to develop a mobile app (Android/iOS) used
                  by several college campuses across America and Canada.
                  <br />
                  - Converted provided mock-ups to React Native styled
                  components.
                  <br />- Created JavaScript functions to fetch data from API
                  and integrate it to the UI.
                </p>
                <ul className={resumeStyles.contentSkills}>
                  <li>Git</li>
                  <li>CSS</li>
                  <li>React Native</li>
                </ul>
              </div>

              <div className={resumeStyles.expItem}>
                <div className={resumeStyles.itemSubHeader}>
                  <div className={resumeStyles.subHeaderTitle}>
                    Jr. Web Developer - Satoripop
                  </div>
                  <div className={resumeStyles.subHeaderTime}>
                    Nov 2011 - Jun 2014
                  </div>
                </div>

                <p>
                  - Developed web interfaces using Twitter Bootstrap, PHP and
                  Node.js.
                  <br />
                  - Designed SQL queries, involving multiple tables and joins.
                  <br />
                  - Transferred WordPress websites from one host to another.
                  <br />
                  - Customized existing WordPress themes and plugins.
                  <br />- Converted design mockups to HTML, CSS responsive web
                  pages.
                </p>
                <ul className={resumeStyles.contentSkills}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>jQuery</li>
                  <li>Ajax</li>
                  <li>JSON</li>
                  <li>WordPress</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                  <li>Node.js</li>
                </ul>
              </div>

              <div className={resumeStyles.expItem}>
                <div className={resumeStyles.itemSubHeader}>
                  <div className={resumeStyles.subHeaderTitle}>
                    Web Developer Intern - Offshore-box
                  </div>
                  <div className={resumeStyles.subHeaderTime}>
                    Jul 2011 - Dec 2011
                  </div>
                </div>

                <p>
                  -Converted psd mockups to HTML CSS web pages.
                  <br />
                  -Modified existing PHP scripts to add/update back end
                  functionalities.
                </p>
                <ul className={resumeStyles.contentSkills}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={resumeStyles.right}>
            <div className={resumeStyles.resumeItem}>
              <div className={resumeStyles.itemHeader}>Contact</div>
            </div>
            <p>
              contact@hamdilachaal.com
              <br />
              (619) 946 - 9622
              <br />
              linkedin.com/in/hlachaal
              <br />
              hlachaal
            </p>
            <div className={resumeStyles.resumeItem}>
              <div className={resumeStyles.itemHeader}>Skills</div>
            </div>
            <p>
              <b>FRONT-END</b>
              <br />
              HTML
              <br />
              CSS
              <br />
              JavaScript
              <br />
              React
              <br />
              React Native
            </p>
            <p>
              <b>BACK-END</b>
              <br />
              WordPress
              <br />
              PHP
              <br />
              MySQL
              <br />
              Node.js
              <br />
              Express
              <br />
              MongoDB
            </p>
            <div className={resumeStyles.resumeItem}>
              <div className={resumeStyles.itemHeader}>Work Environment</div>
              <p>
                Windows 10
                <br />
                VS Code
                <br />
                Postman
                <br />
                Figma
                <br />
                Photoshop
                <br />
                GitHub
                <br />
                Trello
                <br />
                Slack
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ResumePage
