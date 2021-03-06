import React from "react"
import emailjs from "emailjs-com"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import { makeStyles, Container } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  contactWrap: {
    height: "90vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: "3rem",
    wrap: "wrap",
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
    width: 400,
  },
}))

const Contact = () => {
  const { contactWrap, contactForm } = useStyles()
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm("service_h2t04va", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }
  return (
    <Layout>
      <Seo title="Contact" />
      <Container className={contactWrap}>
        <div>
          <h3>Bruxelles</h3>
          <p>On the road down</p>
          <p>221</p>
          <p>SE6 1NH</p>
        </div>
        <form onSubmit={sendEmail} className={contactForm}>
          {/* <input type="hidden" name="contact_number" /> */}
          <label htmlFor="user_name">Name</label>
          <input type="text" name="user_name" required />
          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" required />
          <label htmlFor="message">Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </Container>
    </Layout>
  )
}
export default Contact
