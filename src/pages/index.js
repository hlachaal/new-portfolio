import React from "react"
import { Link } from "gatsby"
import hamdi from "../images/pic_index.svg"

import Head from "../components/head"
import Menu from "../components/menu"
import Footer from "../components/footer"

import indexStyles from "./index.module.scss"

const IndexPage = ({ data }) => {
  return (
    <div className={indexStyles.indexContainer}>
      <Head
        pageTitle={"Home page"}
        pageDescription="Web developer with a passion for JavaScript."
      />
      <div className={indexStyles.indexMenu}>
        <Link className={indexStyles.logo} to="/">
          <h1>{"<>Hamdi Lachaal</>"}</h1>
        </Link>
        <Menu />
      </div>
      <div className={indexStyles.indexContent}>
        <div className={indexStyles.imageContainer}>
          <img alt="Hamdi Listening" src={hamdi} />
        </div>
        <h2>Hi, I'm Hamdi. I'm a web developer.</h2>
        <p>
          I love all things front-end and back-end web programming. I was born
          in Monastir and raised in Sousse, Tunisia.
          <br /> Four years after graduating college, I sold everything and
          moved to California.
          <br /> <br />
          Need a developer? Want to hire me? Need some contract work? Just want
          to chat? <Link to="/contact">Contact me</Link>
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
