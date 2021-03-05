import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  imageDown: {
    width: "170px",
    height: "450px",
    marginRight: "50px",
    marginBottom: "20px",
    "&:hover": { transform: "translateY(40px)" },
  },
  imageUp: {
    width: "170px",
    height: "450px",
    marginRight: "50px",
    marginTop: "40px",
    "&:hover": { transform: "translateY(-40px)" },
  },
  imagesWrap: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}))

const Image = () => {
  const { imageDown, imageUp, imagesWrap } = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 450, maxWidth: 170) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className={imagesWrap}>
        {data.allFile.edges.map((edge, index) => (
          <div className={index % 2 === 1 ? imageDown : imageUp}>
            <Img fluid={edge.node.childImageSharp.fluid} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Image
