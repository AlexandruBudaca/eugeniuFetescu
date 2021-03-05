import React, { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Container,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

import { Link as RouterLink } from "gatsby"

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "How to order",
    href: "/howToOrder",
  },
  {
    label: "Contact",
    href: "/contact",
  },
]

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "white",
    paddingLeft: 70,
    paddingRight: 70,
    "@media (max-width: 900px)": {
      paddingLeft: 0,
      backgroundColor: "white",
    },
    height: 60,
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "grey",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 300,
    size: "18px",
    marginLeft: "38px",
    color: "grey",
    textDecoration: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}))

const Header = () => {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles()

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  })

  const { mobileView, drawerOpen } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState(prevState => ({ ...prevState, mobileView: true }))
        : setState(prevState => ({ ...prevState, mobileView: false }))
    }

    setResponsiveness()

    window.addEventListener("resize", () => setResponsiveness())
  }, [])

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {Logo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    )
  }

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState(prevState => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () =>
      setState(prevState => ({ ...prevState, drawerOpen: false }))

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "grey",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{Logo}</div>
      </Toolbar>
    )
  }

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      )
    })
  }

  const Logo = (
    <RouterLink to="/" style={{ textDecoration: "none" }}>
      <Typography variant="h6" component="h1" className={logo}>
        Eugeniu Fetescu
      </Typography>
    </RouterLink>
  )

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <RouterLink
          {...{
            key: label,
            color: "inherit",
            to: href,
            className: menuButton,
          }}
          activeStyle={{
            color: "black",
            fontWeight: 700,
          }}
        >
          {label}
        </RouterLink>
      )
    })
  }

  return (
    <header>
      <Container maxWidth="lg">
        <AppBar className={header} style={{ boxShadow: "none" }}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </Container>
    </header>
  )
}

export default Header
