import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Device1 from '../components/Device1.js';
import Device2 from '../components/Device2.js';

//切り抜き端末
import iphone8 from '../img/iphone8.png';
import iphone8yoko from '../img/iphone8yoko.png';
import iphone11 from '../img/iphone11.png';
import iphone11yoko from '../img/iphone11yoko.png';
import ipadPro from '../img/ipadPro.png';
import ipadProyoko from '../img/ipadProyoko.png';

const useStyles = makeStyles({
  //全体のCSS
  zentai:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
  }
});
const Preview = () => {
  const classes=useStyles();
  return (
    /* スタートページはこの中を書き換えて */
    <div className={classes.zentai}>
      <Device1/>
      <Device2/>
    </div>
  );
};

export default Preview;
