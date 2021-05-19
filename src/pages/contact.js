import React from "react"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import { makeStyles, Container, Grid } from "@material-ui/core"
import { useFormControls } from "../components/contactControls"
import { Button, TextField } from "@material-ui/core"
import SimpleBackdrop from "../components/backdrop"
import Recaptcha from "react-google-invisible-recaptcha"

const useStyles = makeStyles(theme => ({
  contactWrap: {
    height: "90vh",
    paddingTop: "3rem",
    display: "flex",
    justifyContent: "space-even",
    alignItems: "center",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "unset",
    },
  },
  contactForm: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    paddingTop: 20,
  },
  address: {
    flexBasis: "100%",
    paddingTop: 0,
    [theme.breakpoints.down("sm")]: {
      flexBasis: 0,
      paddingTop: 30,
    },
  },
}))

const Contact = () => {
  const { contactWrap, contactForm, address } = useStyles()

  const inputFieldValues = [
    {
      name: "fullName",
      label: "Full Name",
      id: "my-name",
    },
    {
      name: "email",
      label: "Email",
      id: "my-email",
    },
    {
      name: "message",
      label: "Message",
      id: "my-message",
      multiline: true,
      rows: 10,
    },
  ]
  const {
    values,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors,
    message,
    setMessage,
    recaptchaRef,
  } = useFormControls()

  console.log(process.env.GATSBY_YOUR_SITE_KEY)

  return (
    <Layout>
      <Seo title="Contact" />
      <Container className={contactWrap}>
        <SimpleBackdrop
          open={message}
          setMessage={setMessage}
          message={values.success}
        />
        <Grid item xs={12} lg={6} sm={6} className={address}>
          <h3>Bruxelles</h3>
          <p>Belgium</p>
          <p>efetescu@gmail.com</p>
        </Grid>

        <Grid item xs={12} lg={6} sm={6} className={address}>
          <form autoComplete="off" onSubmit={handleFormSubmit}>
            {inputFieldValues.map((inputFieldValue, index) => {
              return (
                <TextField
                  key={values.success + `${index}`}
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  name={inputFieldValue.name}
                  label={inputFieldValue.label}
                  error={errors[inputFieldValue.name]}
                  multiline={inputFieldValue.multiline ?? false}
                  fullWidth
                  rows={inputFieldValue.rows ?? 1}
                  autoComplete="none"
                  {...(errors[inputFieldValue.name] && {
                    error: true,
                    helperText: errors[inputFieldValue.name],
                  })}
                />
              )
            })}
            <div className={contactForm}>
              <Button
                variant="contained"
                type="submit"
                color="secondary"
                disabled={!formIsValid()}
              >
                Send Message
              </Button>
            </div>
          </form>
        </Grid>
        <Recaptcha
          ref={recaptchaRef}
          sitekey={process.env.GATSBY_YOUR_SITE_KEY}
          onResolved={() => console.log("Human detected.")}
        />
      </Container>
    </Layout>
  )
}
export default Contact
