import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Container } from "@material-ui/core"
import Layout from "../components/layout"
import Seo from "../components/Seo"

const useStyles = makeStyles(theme => ({
  wrap: {
    height: "90vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    wrap: "wrap",
    paddingTop: "8rem",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      height: "100%",
      paddingTop: "7rem",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  contentTab: {},
  containerAccordion: {
    height: "50vh",
    overflow: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
}))

export default function HowToOrder() {
  const classes = useStyles()

  return (
    <Layout>
      <Seo title="About" />
      <Container className={classes.wrap}>
        <h3>How to order</h3>
        <div className={classes.containerAccordion}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}> The picture</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.contentTab}>
                <p>
                  It is important that you select good quality photos. There are
                  several things to consider when you select your picture for a
                  portrait. Avoid very small photos. Avoid the unfocussed
                  subjects. The larger the image size is better. A good
                  lightning on the subject will be nice. Don’t worry about the
                  background. It can be changed.
                </p>
                <div>
                  The photo is very important! In order to get a good portrait I
                  need good pictures. Just consider that the photo will be my
                  guide and my only reference through the process.
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
                  <p>
                    {" "}
                    A good portrait is done from good photos but not all the
                    photos can be used for a portrait. The expression, the eyes,
                    the pose, the light…everything counts to make a good
                    portrait. Avoid very small photos and unfocussed subjects.
                    Don’t worry for the background. It can be changed.
                  </p>
                  <p>The larger the image size, better!</p>
                  <p>
                    {" "}
                    Feel free to send me your selected photos and we will choose
                    together the best one for your portrait. I’ll advice you
                    without compromise and explain to you why one image could
                    work and the other don´t…
                  </p>
                  <p>
                    In the case of double portraits different subjects from
                    different images can sometimes be combined in a single
                    painting, but of course it is much better to work from one
                    good single image.
                  </p>
                  Don’t hesitate to contact me for any questions! I’ll be glad
                  to answer your doubts.
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Size</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.contentTab}>
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
                <div>
                  For Oil Portrait paintings sizes are much more extensive and
                  varied. The most common standard sizes are as follows;
                  25.5×21.2 “(65×54 cm) and 32×25.5” (81 x 65 cm).
                  <p>
                    {" "}
                    In both cases, if you need a concrete or different size
                    please notify me in advance. I’ll do the same if I think
                    that your picture requires it.
                  </p>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Pricing</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.contentTab}>
                <p>
                  Each portrait is different and requires a different approach,
                  amount of work, size, medium, etc.
                </p>
                Black&White:
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  <ul>
                    <p>A4:</p>
                    <li>21/29,7cm - 41€</li>
                    <li>20/30cm - 41€</li>
                    <li>28/35cm - 41€</li>
                  </ul>
                  <ul style={{ paddingLeft: 30 }}>
                    <p>A3:</p>
                    <li>29,7/42cm - 51€</li>
                    <li>30/40cm - 51€</li>
                    <li>28/43cm - 51€</li>
                  </ul>
                </div>
                Colour (soft pastels):
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  <ul>
                    <p>A4:</p>
                    <li>21/29,7cm - 51€</li>
                    <li>20/30cm - 51€</li>
                  </ul>
                </div>
                Picture:
                <div
                  style={{
                    display: "flex",
                    marginTop: 20,
                  }}
                >
                  <ul>
                    <p style={{ color: "transparent" }}>A4</p>
                    <li> 28/35 cm - 51€ </li>
                    <li>50/70 cm - 71€</li>
                  </ul>
                  <ul style={{ paddingLeft: 30 }}>
                    <p>A3:</p>
                    <li>29,7/42cm - 61€</li>
                    <li>30/40cm - 61€</li>
                    <li>28/43cm - 61€</li>
                  </ul>
                </div>
                <p>
                  All other dimensions,black and white or colour, to discuss.
                </p>
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
                <p style={{ color: "red" }}>
                  The shipping is not included in the price.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Delivery</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.contentTab}>
                <p>
                  Once the portrait is finished it is sprayed with a
                  professional Pastel Fixative that will preserve the painting
                  for the years to come.
                </p>
                <p>
                  Then it is well protected for the shipping, and sent by Mail.
                  It usually takes a week to cross the world. It can also be
                  sent with FedEx with an additional extra payment.
                </p>{" "}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <Container
          style={{
            textAlign: "center",
            border: "1px solid red",
            color: "grey",
            marginTop: 50,
          }}
        >
          To order please feel free to contact me via email,or any social media
          links that you will find in contact rubric and I´ll write or call you
          back as soon as possible to discuss all the details.
        </Container>
      </Container>
    </Layout>
  )
}
