import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import {
  makeStyles,
  Container,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"
import Img from "gatsby-image"

// const tileData = [
//   {
//     img: image,
//     title: "Eugeniu Fetescu",
//     author: "author",
//   },
//   {
//     img: image,
//     title: "Alexandru Budaca",
//     author: "author",
//   },
//   {
//     img: image,
//     title: "GiGi",
//     author: "author",
//   },
//   {
//     img: image,
//     title: "Vasile",
//     author: "author",
//   },
//   {
//     img: image,
//     title: "Emilia",
//     author: "author",
//   },
// ]
const useStyles = makeStyles(theme => ({
  galleryWrap: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "6rem",
    wrap: "wrap",
    flexDirection: "column",
  },
}))

const Gallery = () => {
  const { galleryWrap } = useStyles()
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "Main images" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Gallery" />
      <Container maxWidth="lg">
        <Container className={galleryWrap} component="div">
          <h3>Gallery</h3>
          <Grid
            container
            spacing={6}
            direction="row"
            justify="center"
            alignItems="center"
          >
            {data.allFile.edges.map((art, index) => (
              <>
                <Grid item xs={12} lg={3} sm={6} key={index} align="center">
                  <div
                    onClick={handleClickOpen}
                    style={{ cursor: "pointer" }}
                    role="button"
                    aria-hidden="true"
                  >
                    <Img
                      fluid={art.node.childImageSharp.fluid}
                      style={{ width: 300, height: 300 }}
                    />
                  </div>
                </Grid>
                <Dialog
                  fullScreen={fullScreen}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
                  <DialogContent style={{ width: 600 }}>
                    <Img fluid={art.node.childImageSharp.fluid} />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </>
            ))}
          </Grid>
        </Container>
      </Container>
    </Layout>
  )
}
export default Gallery
