import React from "react"
import { makeStyles, Container, Typography } from "@material-ui/core"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const useStyles = makeStyles(() => ({
  howToOrderWrap: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "3rem",
    wrap: "wrap",
  },
}))

const HowToOrder = () => {
  const { howToOrderWrap } = useStyles()
  return (
    <Layout>
      <Seo title="How to order" />
      <Container maxWidth="lg">
        <Typography className={howToOrderWrap} component="div">
          <h1>How to order</h1>
        </Typography>
      </Container>
    </Layout>
  )
}
export default HowToOrder
