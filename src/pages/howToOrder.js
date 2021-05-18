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
      <Seo title="How to order" />
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
                <div>
                  It is important for you to select good quality photos. There
                  are several things to consider when you select the picture for
                  a portrait:
                  <p></p>
                  <p>°Avoid very small photos.</p>
                  <p>°Avoid the unfocused subjects.</p>
                  <p>°The larger the image size, the better! </p>
                  <p>°Good lightning on the subject is ideal.</p>
                  <p>°Don’t worry about the background. It can be changed.</p>
                </div>
                <div>
                  The photo is very important! In order to get a good portrait,
                  I need good pictures. Just consider that the photo will be my
                  guide and my only reference through the whole process.
                  <p>
                    There are several things to consider when you select the
                    pictures for a portrait. Even though today almost anyone can
                    take nice pictures using their mobile phones, professional
                    photos are always a better option.
                  </p>{" "}
                  <div>
                    If you can get a professional photographer, half of the work
                    is already done! In any case, here are some tips:
                    <p></p>
                    <p>°It is important that you select good quality photos</p>
                    <p>
                      °Select images that will evoke something special to you.{" "}
                    </p>
                    <p>
                      °A big smile is not always the only option for a good look
                      and the best result for a quality portrait
                    </p>
                    <p>
                      °It's not always required to look directly at the camera.
                    </p>
                    <p>
                      °The expression, the eyes, the pose, the light should are
                      incredibly important for a good result
                    </p>
                    <p>°The larger the image size, better!</p>
                  </div>
                  <p>
                    Feel free to send me your selected photos and we will choose
                    together the best one for your portrait. I'll take you
                    through the process and explain to you why one image could
                    work and another may not.
                  </p>
                  <p>
                    It is possible to have double portraits, where different
                    subjects from different images are combined in a single
                    painting. But of course it is much better to work from one
                    quality single image.
                  </p>
                  Don’t hesitate to contact me for any questions! I’ll be glad
                  to answer them.
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
                Black&White - Charcoal or Graphite (Client’s choise) :
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
                    flexWrap: "wrap",
                    marginTop: 20,
                  }}
                >
                  <ul>
                    <p>A4:</p>
                    <li>21/29,7cm - 51€</li>
                    <li>20/30cm - 51€</li>
                    <li>28/35cm - 51€</li>
                  </ul>
                  <ul style={{ paddingLeft: 30 }}>
                    <p>A3:</p>
                    <li>29,7/42cm - 61€</li>
                    <li>30/40cm - 61€</li>
                    <li>28/43cm - 61€</li>
                    <li>50/70cm - 71€</li>
                  </ul>
                </div>
                <p>
                  All other dimensions, black and white or colour, to discuss.
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
                  It usually takes a week to cross the world.
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
