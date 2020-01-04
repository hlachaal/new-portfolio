import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import Footer from "./footer"
import "../styles/index.scss"

import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.layoutContainer}>
      <Head
        blog={props.blog ? true : false}
        pageTitle={props.pageTitle}
        pageDescription={props.pageDescription}
      />
      <div className={layoutStyles.layoutWrapper}>
        {/* <div className={layoutStyles.headerWrapper}>
          <Link className={layoutStyles.logo} to="/">
            <h1>{"<Hamdi Lachaal />"}</h1>
          </Link>
          <div className={layoutStyles.nav}>
            <nav>
              <input type="checkbox" id="toggle" />
              <ul className={layoutStyles.navList}>
                <li>
                  <Link
                    className={layoutStyles.navItem}
                    activeClassName={layoutStyles.activeNavItem}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={layoutStyles.navItem}
                    activeClassName={layoutStyles.activeNavItem}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className={layoutStyles.navItem}
                    activeClassName={layoutStyles.activeNavItem}
                    to="/work"
                  >
                    Work
                  </Link>
                </li>
                 <li>
                <Link
                  className={layoutStyles.navItem}
                  activeClassName={layoutStyles.activeNavItem}
                  partiallyActive={true}
                  to="/blog"
                >
                  Blog
                </Link>
              </li> 
                <li>
                  <Link
                    className={layoutStyles.navItem}
                    activeClassName={layoutStyles.activeNavItem}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={layoutStyles.hamburger}>
            <label htmlFor="toggle">&#9776;</label>
          </div>
        </div> */}
        <div className={layoutStyles.layoutPageContent}>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}
export default Layout
