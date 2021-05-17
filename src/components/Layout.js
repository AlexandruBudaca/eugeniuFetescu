import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import { makeStyles } from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import YouTubeIcon from "@material-ui/icons/YouTube"

import Header from "./Header"
import "./layout.css"

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    flexWrap: "wrap",
  },
  footerDate: {
    marginLeft: 80,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  footerLinks: {
    marginRight: 80,
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      flexDirection: "column",
      alignItems: "center",
    },
    display: "flex",
    justifyContent: "center",
  },
  footerA: {
    padding: "0px 10px",
    color: "grey",
    "&:hover": {
      color: "black",
    },
  },
}))

const Layout = ({ children }) => {
  const { footerDate, footer, footerLinks, footerA } = useStyles()
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  // data.site.siteMetadata?.title ||
  return (
    <>
      <div>
        <Header siteTitle={`Title`} />

        <main
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {children}
        </main>
        <footer className={footer}>
          <div className={footerDate}>
            © {new Date().getFullYear()} Eugeniu Fetescu
          </div>

          <div className={footerLinks}>
            {typeof window !== "undefined" && window.innerWidth < 900 ? (
              ""
            ) : (
              <p>Follow me on</p>
            )}

            <div>
              <a
                href="https://www.facebook.com/Eugeniu-Fetescu-Art-112272913906156"
                className={footerA}
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/eugeniufetescu/"
                target="_blank"
                rel="noreferrer"
                className={footerA}
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.youtube.com/channel/UCNfQ-Jaw_Bnn_zBXaQqoNsA"
                className={footerA}
                target="_blank"
                rel="noreferrer"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
