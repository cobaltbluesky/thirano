import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//切り抜き端末
import iphone8 from "../img/iphone8.png";
import iphone8yoko from "../img/iphone8yoko.png";
import iphone11 from "../img/iphone11.png";
import iphone11yoko from "../img/iphone11yoko.png";

//スタイル
import modalStyleList from "../styles/previewStyles";

const Device2 = props => {
  const {src, deviceType} = props;
  let classes;
  let imgsrc;
  switch(deviceType){
    case 1:
       classes=modalStyleList.iphone8();
       imgsrc=iphone8yoko;
      break;
    
    case 2:
      classes=modalStyleList.iphone11();
      imgsrc=iphone11yoko;
      break;
      case 3:
          classes=modalStyleList.iphone8tate();
          imgsrc=iphone8;
          break;
      case 4:
          classes=modalStyleList.iphone11tate();
          imgsrc=iphone11;
          break;

    default:
      classes=modalStyleList.iphone8();
      imgsrc=iphone8yoko;
      break;
  }
  return (
    <div>
      <iframe
        className={classes.device2}
        frameBorder="0"
        title="device2"
        src={src}
      >
        iframeをつかっています。
      </iframe>
      <img className={classes.img2} alt="flame" src={imgsrc} />
    </div>
  );
};

export default Device2;
