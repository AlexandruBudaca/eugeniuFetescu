import React from "react"
import { makeStyles, Container } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Tab from "@material-ui/core/Tab"
import TabContext from "@material-ui/lab/TabContext"
import TabList from "@material-ui/lab/TabList"
import TabPanel from "@material-ui/lab/TabPanel"
import Layout from "../components/layout"
import Seo from "../components/Seo"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  howToOrderWrap: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    paddingTop: "10rem",
    wrap: "wrap",
  },
}))

const HowToOrder = () => {
  const { root, howToOrderWrap } = useStyles()

  const [value, setValue] = React.useState("1")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Layout>
      <Seo title="How to order" />
      <Container maxWidth="lg" className={howToOrderWrap}>
        <div className={root}>
          <TabContext value={value}>
            <AppBar position="static" style={{ backgroundColor: "grey" }}>
              <TabList
                onChange={handleChange}
                aria-label="simple tabs example"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Tab label="THE PICTURE" value="1" />
                <Tab label="MATERIALS" value="2" />
                <Tab label="PRICING" value="3" />
              </TabList>
            </AppBar>
            <TabPanel
              value="1"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 style={{ textAlign: "center" }}>
                How to choose the right picture
              </h2>
              <div>
                <p>
                  It is important that you select good quality photos. There are
                  several things to consider when you select your picture for a
                  portrait. Avoid very small photos. Avoid the unfocussed
                  subjects. The larger the image size is better. A good
                  lightning on the subject will be nice. Don’t worry about the
                  background. It can be changed.
                </p>
              </div>
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </div>
      </Container>
    </Layout>
  )
}
export default HowToOrder
