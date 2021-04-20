import React from "react"
import Carousel from "react-material-ui-carousel"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const CarouselMobile = props => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "HomePageImages" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            id
          }
        }
      }
    }
  `)
  return (
    <Carousel fullHeightHover={false} indicators={false}>
      {data.allFile.edges.map(edge => (
        <div key={edge.node.id} style={{ width: "100vw", height: "100vh" }}>
          <Img
            fluid={edge.node.childImageSharp.fluid}
            style={{ width: "100vw", height: "100vh" }}
          />
        </div>
      ))}
    </Carousel>
  )
}

export default CarouselMobile
