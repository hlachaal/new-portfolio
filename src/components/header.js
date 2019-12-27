import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <div className={headerStyles.nav}>
        <nav>
          <input type="checkbox" id="toggle" />
          <ul className={headerStyles.navList}>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/work"
              >
                Work
              </Link>
            </li>
            {/* <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              partiallyActive={true}
              to="/blog"
            >
              Blog
            </Link>
          </li> */}
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={headerStyles.hamburger}>
        <label htmlFor="toggle">&#9776;</label>
      </div>
    </header>
  )
}

export default Header
