import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "48px",
    backgroundColor:"#FFFFFF"
  },
  add: {
    width: "64px",
    height: "64px",
  }
}));

/* 
className: string
*/
const AddButton = props => {
  const classes = useStyles();
  const { className, onClick } = props;
  return (
    <Fab className={`${classes.root} ${className}`} onClick={onClick}>
      <Box my={-3.6}>
        <Add className={classes.add}  />
      </Box>
    </Fab>
  );
};

export default AddButton;
