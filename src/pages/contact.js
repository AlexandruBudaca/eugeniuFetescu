import React from "react"
import emailjs from "emailjs-com"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import { makeStyles, Container, Grid } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  contactWrap: {
    height: "90vh",
    paddingTop: "3rem",
    display: "flex",
    justifyContent: "space-even",
    alignItems: "center",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "unset",
    },
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
  },
  address: {
    flexBasis: "100%",
    [theme.breakpoints.down("sm")]: {
      flexBasis: 0,
    },
  },
}))

const Contact = () => {
  const { contactWrap, contactForm, address } = useStyles()
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
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
        <Grid xs={12} lg={6} sm={6} className={address}>
          <h3>Bruxelles</h3>
          <p>On the road down</p>
          <p>221</p>
          <p>SE6 1NH</p>
        </Grid>
        <Grid xs={12} lg={6} sm={6} className={address}>
          <form onSubmit={sendEmail} className={contactForm}>
            {/* <input type="hidden" name="contact_number" /> */}
            <label htmlFor="user_name">Name</label>
            <input type="text" name="user_name" required />
            <label htmlFor="user_email">Email</label>
            <input type="email" name="user_email" required />
            <label htmlFor="message">Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" style={{ marginTop: 10 }} />
          </form>
        </Grid>
      </Container>
    </Layout>
  )
}
export default Contact
