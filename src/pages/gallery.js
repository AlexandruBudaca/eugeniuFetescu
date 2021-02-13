import React, { useState } from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"
import image from "../images/meAbout.jpg"

const tileData = [
  {
    img: image,
    title: "Eugeniu Fetescu",
    author: "author",
  },
  {
    img: image,
    title: "Alexandru Budaca",
    author: "author",
  },
  {
    img: image,
    title: "GiGi",
    author: "author",
  },
  {
    img: image,
    title: "Vasile",
    author: "author",
  },
  {
    img: image,
    title: "Emilia",
    author: "author",
  },
  {
    img: image,
    title: "Manea",
    author: "author",
  },
  {
    img: image,
    title: "Fetescu",
    author: "author",
  },
  {
    img: image,
    title: "Budaca",
    author: "author",
  },
  {
    img: image,
    title: "Image",
    author: "author",
  },
  {
    img: image,
    title: "Image",
    author: "author",
  },
  {
    img: image,
    title: "Image",
    author: "author",
  },
  {
    img: image,
    title: "Image",
    author: "author",
  },
  {
    img: image,
    title: "Image",
    author: "author",
  },
]
const useStyles = makeStyles(theme => ({
  galleryWrap: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10rem",
    wrap: "wrap",
    flexDirection: "column",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}))

const Gallery = () => {
  const { galleryWrap, gridItem } = useStyles()
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Layout>
      <Seo title="Gallery" />
      <Container maxWidth="lg">
        <Typography className={galleryWrap} component="div">
          <h3>Gallery</h3>
          <Grid
            container
            spacing={6}
            direction="row"
            justify="center"
            alignItems="center"
          >
            {tileData.map(art => (
              <Grid item xs={12} lg={3} sm={6} className={gridItem}>
                <img src={art.img} alt="some" />
                <p>{art.title}</p>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleClickOpen}
                >
                  More
                </Button>
              </Grid>
            ))}
            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                {"Titlul aici!"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Poate scriem ceva
                  aiicicisaisaidnsbidsbigsdijgbsdijgbsijdbgjidbgisdjbgisdbgijs
                </DialogContentText>
                <img src={image} alt="some" />
                <img src={image} alt="some" />
                <img src={image} alt="some" />
                <img src={image} alt="some" />
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Typography>
      </Container>
    </Layout>
  )
}
export default Gallery
