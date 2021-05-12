import React from "react"
import Backdrop from "@material-ui/core/Backdrop"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}))

export default function SimpleBackdrop({ open, setMessage, message }) {
  const classes = useStyles()

  const handleClose = () => {
    setMessage(false)
  }

  return (
    <div>
      {message ? (
        <Backdrop
          className={classes.backdrop}
          open={open}
          onClick={handleClose}
        >
          <div
            style={{
              backgroundColor: "green",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: 100,
              textAlign: "center",
            }}
          >
            <h3 style={{ margin: 0 }}>
              Your message was successfully send! Thank you!
            </h3>
          </div>
        </Backdrop>
      ) : (
        <Backdrop
          className={classes.backdrop}
          open={open}
          onClick={handleClose}
        >
          <div
            style={{
              backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: 100,
              textAlign: "center",
            }}
          >
            <h3 style={{ margin: 0 }}>Something went wrong! Thank you!</h3>
          </div>
        </Backdrop>
      )}
    </div>
  )
}
