import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./App.scss"

const Image = () => {
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

  // if (!data?.placeholderImage?.childImageSharp?.fluid) {
  //   return <div>Picture not found</div>
  // }

  return (
    <>
      <div className="ima">
        {data.allFile.edges.map((edge, index) => (
          <div className={index % 2 === 1 ? "pic" : "pic2"}>
            <Img fluid={edge.node.childImageSharp.fluid} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Image
