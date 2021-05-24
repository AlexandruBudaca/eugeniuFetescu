import React from "react"
import { Container, makeStyles } from "@material-ui/core"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

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
    height: 450,
    width: 450,
    [theme.breakpoints.down("sm")]: {
      height: 300,
      width: 300,
    },
    borderRadius: "100%",
  },
}))

const About = () => {
  const { aboutWrap, aboutText, aboutImage } = useStyles()
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "meAbout.jpg" }) {
        childImageSharp {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Seo title="About" />
      <Container maxWidth="lg">
        <div className={aboutWrap}>
          <div className={aboutText}>
            <h3>About me</h3>
            <p>
              My name is Eugen Fetescu. I’m a Roumanian artist based in Brussels
              and I love art. I originally trained as an actor, but I came to
              discover and gradually developed a deep passion for fine art. I
              have enjoyed drawing animals, birds and celebrities from a very
              young age. My passion consists in creating life on paper. In order
              to do so, I use a variety of dry mediums, from graphite pencils
              and charcoal for monochrome drawings to soft pastels and pastel
              pencils for the colored ones. I love to paint portraits of people
              as well as pet portraits, using top quality materials in order to
              ensure longevity. I create original drawings, and welcome new
              challenges to create unique custom artwork.
            </p>
          </div>

          <Img fluid={data.file.childImageSharp.fluid} className={aboutImage} />
        </div>
      </Container>
    </Layout>
  )
}
export default About
