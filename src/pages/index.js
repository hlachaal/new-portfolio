import React from "react"
import hamdi from "../images/pic_index.svg"

import Head from "../components/head"
import Footer from "../components/footer"

import indexStyles from "./index.module.scss"
import { Link } from "gatsby"
const IndexPage = ({ data }) => {
  return (
    <div className={indexStyles.indexContainer}>
      <Head
        pageTitle={"Home page"}
        pageDescription="Software engineer with a passion for web development and JavaScript."
      />
      <div className={indexStyles.headerWrapper}>
        <Link className={indexStyles.logo} to="/">
          <h1>{"<Hamdi Lachaal />"}</h1>
        </Link>
        <div className={indexStyles.nav}>
          <nav>
            <input type="checkbox" id="toggle" />
            <ul className={indexStyles.navList}>
              <li>
                <Link
                  className={indexStyles.navItem}
                  activeClassName={indexStyles.activeNavItem}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={indexStyles.navItem}
                  activeClassName={indexStyles.activeNavItem}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={indexStyles.navItem}
                  activeClassName={indexStyles.activeNavItem}
                  to="/work"
                >
                  Work
                </Link>
              </li>
              {/* <li>
                <Link
                  className={indexStyles.navItem}
                  activeClassName={indexStyles.activeNavItem}
                  partiallyActive={true}
                  to="/blog"
                >
                  Blog
                </Link>
              </li> */}
              <li>
                <Link
                  className={indexStyles.navItem}
                  activeClassName={indexStyles.activeNavItem}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={indexStyles.hamburger}>
          <label htmlFor="toggle">&#9776;</label>
        </div>
      </div>

      <div className={indexStyles.indexContent}>
        <div className={indexStyles.imageContainer}>
          <img alt="Hamdi Listening" src={hamdi} />
        </div>
        <h2>Hi, I'm Hamdi. I'm a Software Engineer.</h2>
        <p>
          I was born in Monastir and raised in Sousse, Tunisia.
          <br /> Four years after college, I sold everything and moved to
          California.
          <br /> <br />
          Need a developer? Want to hire me? Need some contract work? Just want
          to chat? <Link to="/contact">Contact me</Link>.
        </p>
      </div>
      <Footer />
    </div>
  )
}
export default IndexPage
