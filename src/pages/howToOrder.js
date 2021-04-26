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
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    paddingTop: "8rem",
    wrap: "wrap",
  },
  contentTab: {
    overflow: "scroll",
    height: 250,
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      overflow: "scroll",
      height: 350,
      width: "100%",
    },
  },
}))

const HowToOrder = () => {
  const { root, howToOrderWrap, contentTab } = useStyles()

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
                <Tab label="SIZE" value="2" />
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
              <h3 style={{ textAlign: "center" }}>
                How to choose the right picture
              </h3>
              <div className={contentTab}>
                <p>
                  It is important that you select good quality photos. There are
                  several things to consider when you select your picture for a
                  portrait. Avoid very small photos. Avoid the unfocussed
                  subjects. The larger the image size is better. A good
                  lightning on the subject will be nice. Don’t worry about the
                  background. It can be changed.
                </p>
                <p>
                  The photo is very important! In order to get a good portrait I
                  need good pictures. Just consider that the photo will be my
                  guide and my only reference through the process. <br />
                  <p>
                    There are several things to consider when you select the
                    pictures for the portrait. Even that today almost everybody
                    can take nice pictures from their cell phones; professional
                    photos are (almost) always the best option…{" "}
                  </p>{" "}
                  <p>
                    {" "}
                    If you can get a professional photographer half of the work
                    is done! In any case here are some tips: It is important
                    that you select good photos, images that will evoke
                    something special to you. Not always the “deep smile” in the
                    picture is good for a portrait! Also It´s not always
                    required a direct look to the camera.{" "}
                  </p>
                  A good portrait is done from good photos but not all the
                  photos can be used for a portrait. The expression, the eyes,
                  the pose, the light…everything counts to make a good portrait.
                  Avoid very small photos and unfocussed subjects. Don’t worry
                  for the background. It can be changed.
                  <p>The larger the image size, better!</p>
                  <p>
                    {" "}
                    Feel free to send me your selected photos and we will choose
                    together the best one for your portrait. I’ll advice you
                    without compromise and explain to you why one image could
                    work and the other don´t…
                  </p>
                  <p>
                    {" "}
                    In the case of double portraits different subjects from
                    different images can sometimes be combined in a single
                    painting, but of course it is much better to work from one
                    good single image.
                  </p>
                  Don’t hesitate to contact me for any questions! I’ll be glad
                  to answer your doubts.
                </p>
              </div>
            </TabPanel>
            <TabPanel
              value="2"
              style={{
                display: " flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className={contentTab}>
                <p>
                  Every portrait needs its own space and each project is
                  different.
                </p>
                <p>
                  Depending on the composition, which is usually determined by
                  the picture to work from, I choose the portrait format size.
                  Sometimes the model´s expression requires more space around or
                  the contrary. Same thing happens with figures and subject´s
                  poses. I generally use two standard sizes for pastel portrait.{" "}
                </p>
                <p>
                  Carre (Square) format for Head and Shoulders in 19 x 19 inches
                  approximately and Standard Classic size for half body, in 19 x
                  25 inches. The larger standard size I use is 29.5 x 42 inches,
                  usually applied to Full body portrait. If you need a special
                  size you should let me know in advance.
                </p>{" "}
                <p>
                  For Oil Portrait paintings sizes are much more extensive and
                  varied. The most common standard sizes are as follows;
                  25.5×21.2 “(65×54 cm) and 32×25.5” (81 x 65 cm).
                  <p>
                    {" "}
                    In both cases, if you need a concrete or different size
                    please notify me in advance. I’ll do the same if I think
                    that your picture requires it.
                  </p>
                </p>
              </div>
            </TabPanel>
            <TabPanel
              value="3"
              style={{
                display: " flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 0,
              }}
            >
              <div className={contentTab}>
                <p>
                  Each portrait is different and requires a different approach,
                  amount of work, size, medium, etc. This is why there is no
                  fixed price list.
                </p>
                <p>All commissions are priced individually.</p>
                <p>
                  Please feel free to send me the pictures you are considering
                  and I´ll write you back as soon as possible to give you a
                  price (and all the related informations) based on your idea,
                  requirements and needs.
                </p>{" "}
                <p>
                  In most of the cases no payment is made in advance but at the
                  end of the process. Once the portrait has been reviewed and
                  approved by the client.
                </p>
                <p>
                  This makes a special trusting relationship between me, the
                  artist, and you, the client. It also gives me the freedom of
                  creating the painting and works as a guarantee for my
                  customers.
                </p>
                <p>
                  Commission your own painting of a pet or a loved one. Every
                  painting is completed with great attention to detail making
                  sure you get not only the best likeness to the subject, but a
                  stunning painting your family will treasure forever. I use
                  high quality archival materials ensuring that your painting
                  will last for many lifetimes.
                </p>
              </div>
            </TabPanel>
          </TabContext>
        </div>
      </Container>
      <Container
        style={{
          textAlign: "center",
          border: "1px solid red",
          color: "grey",
        }}
      >
        To order please feel free to contact me via email,or any social media
        links that you will find in contact rubric and I´ll write or call you
        back as soon as possible to discuss all the details.
      </Container>
    </Layout>
  )
}
export default HowToOrder
