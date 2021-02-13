import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { makeStyles, Container, Typography } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  contactWrap: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "3rem",
    wrap: "wrap",
  },
}))

const Contact = () => {
  const { contactWrap } = useStyles()
  return (
    <Layout>
      <Seo title="Contact" />
      <Container>
        <Typography className={contactWrap} component="div">
          <h1>Contact</h1>
        </Typography>
      </Container>
    </Layout>
  )
}
export default Contact
