import React from "react";

//切り抜き端末
import iphone8 from "../img/iphone8.png";
import iphone8yoko from "../img/iphone8yoko.png";
import iphone11 from "../img/iphone11.png";
import iphone11yoko from "../img/iphone11yoko.png";
import ipadPro from "../img/ipadPro.png";
import ipadProyoko from "../img/ipadProyoko.png";

//スタイル
import modalStyleList from "../styles/previewStyles";

const Device1 = props => {
  const { src, deviceType} = props;
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

    default:
      classes=modalStyleList.iphone8();
      imgsrc=iphone8yoko;
      break;
  }
  
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
      <img className={classes.img1} alt="flame" src={imgsrc} />
    </div>
  );
};

export default Device1;
