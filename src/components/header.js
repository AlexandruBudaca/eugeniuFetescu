import React, { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Container,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import logoHeader from "../images/logo_mafia.png"
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

const useStyles = makeStyles(theme => ({
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
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 300,
    size: "18px",
    marginLeft: "38px",
    color: "grey",
    textDecoration: "none",
    "&:hover": { color: "black" },
  },
  logo: {
    width: "70px",
    marginTop: "50px",
    [theme.breakpoints.down("sm")]: {
      width: "50px",
      marginTop: "30px",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  toolbarMobile: {
    left: "40px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}))

const Header = () => {
  const {
    header,
    menuButton,
    toolbar,
    drawerContainer,
    logo,
    toolbarMobile,
  } = useStyles()

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
    loading: true,
  })

  const { mobileView, drawerOpen, loading } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return typeof window !== "undefined" && window.innerWidth < 900
        ? setState(prevState => ({ ...prevState, mobileView: true }))
        : setState(prevState => ({ ...prevState, mobileView: false }))
    }
    setResponsiveness()
    window.addEventListener("resize", () => setResponsiveness())
    setState(prevState => ({ ...prevState, loading: false }))
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
      <Toolbar className={toolbarMobile}>
        <IconButton
          {...{
            edge: "start",
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
    <Link to="/" style={{ textDecoration: "none" }}>
      <img src={logoHeader} alt="logo" className={logo} />
    </Link>
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
        {!loading ? (
          <AppBar className={header} style={{ boxShadow: "none" }}>
            {mobileView ? displayMobile() : displayDesktop()}
          </AppBar>
        ) : (
          ""
        )}
      </Container>
    </header>
  )
}

export default Header
