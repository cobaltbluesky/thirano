import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//切り抜き端末
import iphone8 from "../img/iphone8.png";
import iphone8yoko from "../img/iphone8yoko.png";
import iphone11 from "../img/iphone11.png";
import iphone11yoko from "../img/iphone11yoko.png";
import ipadPro from "../img/ipadPro.png";
import ipadProyoko from "../img/ipadProyoko.png";

const useStyles = makeStyles({
  //左側のiframeのCSS
  device1: {
    width: 625,
    height: 365,
    top: 250,
    left: 110,
    position: "absolute",
    zIndex: 2
  },
  //左側のスマホのCSS
  img1: {
    position: "absolute",
    width: 850,
    left: -10,
    pointerEvents: "none",
    zIndex: 50
  }
});

const Device1 = props => {
  const { src } = props;
  const classes = useStyles();
  return (
    <div>
      <iframe
        className={classes.device1}
        frameBorder="0"
        title="device1"
        src={src}
      >
        iframeをつかっています。
      </iframe>
      <img className={classes.img1} alt="flame" src={iphone8yoko} />
    </div>
  );
};

export default Device1;
