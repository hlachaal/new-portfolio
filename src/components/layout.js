import React from "react"
import { Link } from "gatsby"
import Menu from "./menu"
import Footer from "./footer"
import "../styles/index.scss"

import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.layoutContainer}>
      <div className={layoutStyles.layoutContent}>
        <div className={layoutStyles.layoutMenu}>
          <Link className={layoutStyles.logo} to="/">
            <h1>Hamdi Lachaal</h1>
          </Link>
          <Menu />
        </div>
        <div className={layoutStyles.layoutPageContent}>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}
export default Layout
