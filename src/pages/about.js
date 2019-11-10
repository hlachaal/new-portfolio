import React from "react"
import Layout from "../components/layout"
import aboutStyles from "./about.module.scss"
import man from "../images/pic_about.svg"

const AboutPage = () => {
  return (
    <Layout>
      <section
        className={[aboutStyles.cdContainer, aboutStyles.cdTimeline].join(" ")}
      >
        <div className={aboutStyles.cdTimelineBlock}>
          <div
            className={[aboutStyles.cdTimelineImg, aboutStyles.cdMovie].join(
              " "
            )}
          ></div>

          <div className={aboutStyles.cdTimelineContent}>
            <h2>My first programming experience</h2>
            <p>
              For my graduation project I collaborated with a bookkeeping
              company to design and develop a tax return manager software.
              <br />
              Used VB.net to create the user interfaces and SQL server to manage
              the database.
            </p>
            <span className={aboutStyles.cdDate}>Jul 2011</span>
          </div>
        </div>
        <div className={aboutStyles.cdTimelineBlock}>
          <div
            className={[aboutStyles.cdTimelineImg, aboutStyles.cdPicture].join(
              " "
            )}
          ></div>

          <div className={aboutStyles.cdTimelineContent}>
            <h2>Getting started with the web development</h2>
            <p>
              During a 6 months internship with a digital marketing company in
              Sousse, Tunisia. I worked with the SEO team to refactor the url
              structure and setup the url forwarding of some existing online
              projects. Also got to work with the lead developer to apply those
              changes and to create optimized web interfaces using HTML, CSS and
              JavaScript.
            </p>
            <span className={aboutStyles.cdDate}>Aug 2011</span>
            <ul className={aboutStyles.contentSkills}>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.mca-architectes.com/"
                >
                  mca-architectes.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={aboutStyles.cdTimelineBlock}>
          <div
            className={[aboutStyles.cdTimelineImg, aboutStyles.cdPicture].join(
              " "
            )}
          ></div>

          <div className={aboutStyles.cdTimelineContent}>
            <h2>Practicing more web coding</h2>
            <p>
              Joined Satoripop as a Jr. Web developer. Worked in a team of five
              web developers. During the first 6 months, I have worked on
              modifying different type of web projects built from scratch with
              PHP/MySQL, HTML, CSS and JavaScript or powered by a CMS such as
              WordPress. Then I worked on rebuilding some of these projects
              utilizing PHP MVC frameworks (CodeIgniter) and recent front-end
              features (responsive design, BEM and jQuery). My work reflected to
              positive results in level of maximizing the page loading speed,
              improving the traffic on the websites, adding an easy way to
              manage the content and delivering valid code standards.
              <br />
            </p>
            <ul className={aboutStyles.contentSkills}>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="http://www.paristay.com/"
                >
                  paristay.com
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="http://www.windward-islands.net/"
                >
                  windward-islands.net
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.coaching-foot.com/"
                >
                  coaching-foot.com
                </a>
              </li>
            </ul>
            <span className={aboutStyles.cdDate}>Jan 2012</span>
          </div>
        </div>
        <div className={aboutStyles.cdTimelineBlock}>
          <div
            className={[aboutStyles.cdTimelineImg, aboutStyles.cdMovie].join(
              " "
            )}
          ></div>

          <div className={aboutStyles.cdTimelineContent}>
            <h2>Freelancing</h2>
            <p>
              By the end of 2016, after taking an online class about Essential
              Javascript Development tools such as Node.js, I started taking
              contract work. One of the projects I have been working on remotely
              is calleridreputation.com
              <br />
              In this project I used WordPress to create the public pages and I
              developed the user's dashboard using CodeIgniter, Node.js, MySQL
              and Bootstrap.
            </p>
            <ul className={aboutStyles.contentSkills}>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.calleridreputation.com/"
                >
                  calleridreputation.com
                </a>
              </li>
            </ul>
            <span className={aboutStyles.cdDate}>Sep 2016</span>
          </div>
        </div>

        <div className={aboutStyles.cdTimelineBlock}>
          <div
            className={[aboutStyles.cdTimelineImg, aboutStyles.cdMovie].join(
              " "
            )}
          ></div>

          <div className={aboutStyles.cdTimelineContent}>
            <h2>New Experience</h2>
            <p>
              During an internship with Occuspace I got to work with an awesome
              team on rebuilding the front-end of Waitz University the mobile
              app using React Native.
            </p>
            <span className={aboutStyles.cdDate}>Aug 2019</span>
          </div>
        </div>

        <div className={aboutStyles.cdTimelineBlock}>
          <div
            className={[aboutStyles.cdTimelineImg, aboutStyles.cdMovie].join(
              " "
            )}
          ></div>

          <div className={aboutStyles.cdTimelineContent}>
            <h2>Available for hiring!</h2>
            <p>
              With the mixture of my programming knowledge and experience, I'm
              able to turn your idea to reality. Want to hire me? Need some
              contract work? Just want to chat? Contact me via email.
            </p>
            <span className={aboutStyles.cdDate}>Present</span>
          </div>
        </div>
      </section>
      <img alt="man coding" className={aboutStyles.image} src={man} />
    </Layout>
  )
}
export default AboutPage
