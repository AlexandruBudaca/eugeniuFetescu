import React, { useState, Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import {
  makeStyles,
  Container,
  Grid,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
} from "@material-ui/core"
import Img from "gatsby-image"
import CloseIcon from "@material-ui/icons/Close"

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
  appBar: {
    position: "absolute",
    backgroundColor: "transparent",
    color: "grey",
    boxShadow: "none",
  },
  imageDialog: {
    marginTop: 60,
    maxWidth: "50%",
    maxHeight: "90vh",
    left: "25%",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      maxWidth: "100%",
      maxHeight: "100vh",
      left: 0,
    },
  },
}))

const Gallery = () => {
  const { galleryWrap, appBar, imageDialog } = useStyles()
  const [idImage, setIdImage] = useState(null)

  const handleClickOpen = imageId => {
    setIdImage(imageId)
  }

  const handleClose = () => {
    setIdImage(null)
  }

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "MainImages" }
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
  const image = data.allFile.edges.filter(art =>
    art.node.id === idImage ? art.node.childImageSharp.fluid : ""
  )
  return (
    <Layout>
      <Seo title="Gallery" />
      <Container maxWidth="lg">
        <Grid className={galleryWrap} component="div">
          <h3>Gallery</h3>
          <Grid
            container
            spacing={6}
            direction="row"
            justify="center"
            alignItems="center"
          >
            {data.allFile.edges.map((art, index) => (
              <Fragment key={index}>
                <Grid
                  item
                  xs={12}
                  lg={3}
                  sm={6}
                  key={art.node.id}
                  align="center"
                >
                  <div
                    onClick={() => handleClickOpen(art.node.id)}
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
              </Fragment>
            ))}
          </Grid>
        </Grid>
        <Dialog
          fullScreen
          open={idImage !== null}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <AppBar className={appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div>
            {image.length >= 0 && image[0] ? (
              <Img
                fluid={image[0].node.childImageSharp.fluid}
                className={imageDialog}
              />
            ) : null}
          </div>
        </Dialog>
      </Container>
    </Layout>
  )
}
export default Gallery
