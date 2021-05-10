import React from "react"
import Backdrop from "@material-ui/core/Backdrop"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}))

export default function SimpleBackdrop({ open, setMessage }) {
  const classes = useStyles()

  const handleClose = () => {
    setMessage(false)
  }

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <div style={{ backgroundColor: "green" }}>Close</div>
      </Backdrop>
    </div>
  )
}
