import React, { useState, useEffect } from "react"
import Image from "./HomeImages"
import { Link } from "gatsby"
import { makeStyles, Container, Typography } from "@material-ui/core"
import CarouselMobile from "./Carousel"

const useStyles = makeStyles(theme => ({
  homeBtn: {
    border: "2px solid black",
    textDecoration: "none",
    borderRadius: 25,
    color: "grey",
    padding: "10px 20px",
    "&:hover": {
      color: "white",
      backgroundColor: "black",
    },
  },
  homeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    wrap: "wrap",
  },
  homeWrap: {
    height: "90vh",
    [theme.breakpoints.down("sm")]: {
      height: "65vh",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    wrap: "wrap",
    paddingTop: "3rem",
  },
}))
const displayDesktop = () => {
  return <Image />
}
const displayMobile = () => {
  return <CarouselMobile />
}

const Home = () => {
  const [state, setState] = useState({
    mobileView: false,
    loading: true,
  })

  const { mobileView } = state
  useEffect(() => {
    const setResponsiveness = () => {
      return typeof window !== "undefined" && window.innerWidth < 900
        ? setState(prevState => ({ ...prevState, mobileView: true }))
        : setState(prevState => ({ ...prevState, mobileView: false }))
    }
    setResponsiveness()
    window.addEventListener("resize", () => setResponsiveness())
    // setState(prevState => ({ ...prevState, loading: false }))
  }, [])
  const { homeBtn, homeContainer, homeWrap } = useStyles()
  return (
    <Container maxWidth="lg" className={homeContainer}>
      <Typography component="div" className={homeWrap}>
        {mobileView ? displayMobile() : displayDesktop()}
        <div style={{ paddingTop: "3rem" }}>
          <Link to="/howToOrder" className={homeBtn}>
            How to order
          </Link>
        </div>
      </Typography>
    </Container>
  )
}

export default Home
