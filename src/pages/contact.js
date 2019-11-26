import React from "react"
import Recaptcha from "react-google-recaptcha"
import Layout from "../components/layout"
import { navigate } from "gatsby-link"
import contactStyles from "./contact.module.scss"

const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY
console.log(RECAPTCHA_KEY)
if (typeof RECAPTCHA_KEY === "undefined") {
  throw new Error(`
  Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined! 
  You probably forget to set it in your Netlify build environment variables. 
  Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
  Note this demo is specifically for Recaptcha v2
  `)
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactPage = () => {
  const [state, setState] = React.useState({})
  const recaptchaRef = React.createRef()

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        "g-recaptcha-response": recaptchaValue,
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <Layout pageTitle="Contact" pageDescription="Best way to contact me.">
      <div className={contactStyles.contactContainer}>
        <h1>Thanks for your interest.</h1>
        <p>How can I help you?</p>
        <form
          name="contact"
          method="POST"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="contact" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <div className={contactStyles.formItem}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              onChange={handleChange}
            />
          </div>

          <div className={contactStyles.formItem}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
          </div>

          <div className={contactStyles.formItem}>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Message"
              required
              onChange={handleChange}
            />
          </div>

          <div className={contactStyles.formItem}>
            <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
          </div>
          <div className={contactStyles.formItem}>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
export default ContactPage
