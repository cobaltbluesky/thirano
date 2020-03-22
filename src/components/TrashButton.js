import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    height: "45px",
    width: "45px"
  },
  icon: {
    height: "36px",
    width: "36px"
  }
}));

/* 
className: string
*/
const TrashButton = props => {
  const classes = useStyles();
  const { className, onClick } = props;
  return (
    <IconButton onClick={onClick} className={`${className}`}>
      <Delete className={`${classes.icon}`} />
    </IconButton>
  );
};

export default TrashButton;
