import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    marginTop: 90,
    width: 250
  }
})

function Cart() {

  const classes = useStyles();

  return (
    <div className={classes.container}>Cart is empty</div>
  )
}

export default Cart