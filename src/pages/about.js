import React from "react"
import { Container, makeStyles } from "@material-ui/core"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import pic from "../images/meAbout.jpg"

const useStyles = makeStyles(theme => ({
  aboutWrap: {
    height: "90vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    wrap: "wrap",
    paddingTop: "6rem",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      height: "100%",
      paddingTop: "5rem",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  aboutText: {
    width: 500,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      width: 300,
      textAlign: "center",
    },
  },
  aboutImage: {
    height: 500,
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
    borderRadius: "100%",
  },
}))

const About = () => {
  const { aboutWrap, aboutText, aboutImage } = useStyles()
  return (
    <Layout>
      <Seo title="About" />
      <Container maxWidth="lg">
        <div className={aboutWrap}>
          <div className={aboutText}>
            <h3>About me</h3>
            <p>
              My name is Eugen Fetescu. I’m a Roumanian artist based in
              Brussels., I love art. My basic profession is acting,but as long
              as i remember I was also passionate about the fine arts.From a
              very young age I enjoyed drawing, animals, birds and celebrities.
              Creating life on paper is my passion.I like to use all the dry
              mediums in my art, such as graphite pencils or charcoal for
              monochrome drawings or soft pastels and pastel pencils for the
              colored ones. Love to paint, Portraits, Pet Portraits. I create
              original drawings, and welcome the challenges of creating that
              special unique piece of custom artwork. I use top quality
              materials to ensure longevity.
            </p>
          </div>
          <div>
            <img src={pic} alt="some" className={aboutImage} />
          </div>
        </div>
      </Container>
    </Layout>
  )
}
export default About
