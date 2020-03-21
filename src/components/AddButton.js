import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "64px"
  },
  add: {
    width: "64px",
    height: "64px"
  }
}));

const AddButton = () => {
  const classes = useStyles();
  return (
    <Fab className={classes.root}>
      <Add className={classes.add} />
    </Fab>
  );
};

export default AddButton;
