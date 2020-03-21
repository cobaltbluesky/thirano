
import React from 'react';
import {makeStyles} from '@material-ui/core/styles'

//切り抜き端末
import iphone8 from '../img/iphone8.png';
import iphone8yoko from '../img/iphone8yoko.png';
import iphone11 from '../img/iphone11.png';
import iphone11yoko from '../img/iphone11yoko.png';
import ipadPro from '../img/ipadPro.png';
import ipadProyoko from '../img/ipadProyoko.png';

const useStyles=makeStyles({
  //右側のiframeのCSS
  device2:{
    width:625,
    height:365,
    top:250,
    left:1020,
    position:'absolute',
    zIndex:2
  },
  //右側のスマホのCSS
  img2:{
    position:'absolute',
    width:850,
    left:900,
    pointerEvents:'none',
    zIndex:50
  }
});

const Device2=()=>{
  const classes=useStyles();
  return(
    <div>
      <iframe
        className={classes.device2}
        frameBorder='0'
        title='device2'
        src="https://chunithm.sega.jp/"
      >
        iframeをつかっています。
      </iframe>
      <img
        className={classes.img2}
        alt='flame'
        src={iphone8yoko}
      />
    </div>
  );
}

export default Device2;