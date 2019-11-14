import React from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby-link"
import contactStyles from "./contact.module.scss"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactPage = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <Layout pageTitle="Contact" pageDescription="Best way to contact me.">
      <div className={contactStyles.contactContainer}>
        <form
          name="contact"
          method="POST"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
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
              placeholder="email"
              required
              onChange={handleChange}
            />
          </div>

          <div className={contactStyles.formItem}>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="message"
              required
              onChange={handleChange}
            />
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
