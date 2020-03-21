import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import shortid from 'shortid';

import AddButton from "../components/AddButton";
import Divice1 from '../components/Device1';
import Popup from '../components/Popup';

const useStyles = makeStyles(theme => ({
  addButton: {
    position: "fixed",
    bottom: "25px",
    right: "25px"
  }
}));

const View = () => {
  const classes = useStyles();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [deviceList, setDeviceList] = useState([]);

  const addDevice = (src, deviceType, isSideways) => {
    // 画面が1枚以上あったら表示しない
    if (deviceList.length >= 1) return;

    const newDevice = {
      src: src, // url
      deviceType: deviceType, // deviceの名前
      isExistFrame: isSideways, // スマホやタブレットの枠が存在するか
      isSideways: true // デバイスが横向いてるか
    };

    // 更新
    setDeviceList([...deviceList, newDevice]);
  };

  // ポップアップの開閉を制御する関数
  const popupOpen = () => setIsPopupOpen(true);
  const popupClose = () => setIsPopupOpen(false);

  const handlePopupSubmit = (src, deviceType, isSideways) => {
    popupClose();
    addDevice(src, deviceType, isSideways);
  }

  return (
    /* メインのページはこの中を書き換えて */
    <>
      <Popup isOpen={isPopupOpen} popupClose={popupClose} onSubmit={handlePopupSubmit}/>
      {deviceList.map(({src}) => <Divice1 src={src} key={shortid.generate()}/>)}
      <AddButton className={classes.addButton} onClick={popupOpen}/>
    </>
  );
};

export default View;
