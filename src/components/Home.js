import React from "react"
import Image from "./HomeImages"
import { Link } from "gatsby"
import { makeStyles, Container, Typography } from "@material-ui/core"

const Home = () => {
  const useStyles = makeStyles(() => ({
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
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      wrap: "wrap",
      paddingTop: "3rem",
    },
  }))
  const { homeBtn, homeContainer, homeWrap } = useStyles()
  return (
    <Container maxWidth="lg" className={homeContainer}>
      <Typography component="div" className={homeWrap}>
        {window.innerWidth < 900 ? <p>Mobile</p> : <Image />}
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
