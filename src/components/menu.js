import React from "react"
import { Link } from "gatsby"

import menuStyles from "./menu.module.scss"

const Menu = props => {
  return (
    <nav>
      <ul className={menuStyles.navList}>
        <li>
          <Link
            className={menuStyles.navItem}
            activeClassName={menuStyles.activeNavItem}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={menuStyles.navItem}
            activeClassName={menuStyles.activeNavItem}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={menuStyles.navItem}
            activeClassName={menuStyles.activeNavItem}
            to="/work"
          >
            Work
          </Link>
        </li>
        {/* <li>
          <Link
            className={menuStyles.navItem}
            activeClassName={menuStyles.activeNavItem}
            partiallyActive={true}
            to="/blog"
          >
            Blog
          </Link>
        </li> */}
        <li>
          <Link
            className={menuStyles.navItem}
            activeClassName={menuStyles.activeNavItem}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
