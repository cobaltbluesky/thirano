import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import shortid from "shortid";

import AddButton from "../components/AddButton";
import Divice1 from "../components/Device1";
import Divice2 from "../components/Device2";
import Popup from "../components/Popup";
import TrashButton from "../components/TrashButton";
import { Autorenew, CenterFocusStrong } from "@material-ui/icons";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  noDeviceText: {
    position: "absolute",
    top: "50%",
    left: "40%",
    textAlign: "center",
    fontSize: "30px"
  },

  addButton: {
    position: "fixed",
    bottom: "25px",
    right: "25px"
  },
  trashButton: {
    position: "fixed",
    top: "100px",
    right: "40px"
  }
}));

const View = () => {
  const classes = useStyles();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [deviceList, setDeviceList] = useState([]);

  const NoDeviceText = () => {
    if (!deviceList.length)
      return (
        <div className={classes.noDeviceText} style={{ color: "gray" }}>
          URLが設定されていません
        </div>
      );
    else return null;
  };
  const PopupButtonStop = () => {
    if (deviceList.length !== 2)
      return <AddButton className={classes.addButton} onClick={popupOpen} />;
    else return null;
  };

  const addDevice = (src, deviceType, isSideways) => {
    // 画面が2枚以上あったら表示しない
    if (deviceList.length >= 2) return;

    const newDevice = {
      src: src, // url
      deviceType: deviceType, // deviceの名前
      isExistFrame: isSideways, // スマホやタブレットの枠が存在するか
      isSideways: true // デバイスが横向いてるか
    };

    // 更新
    setDeviceList([...deviceList, newDevice]);
  };

  const deleteAllDevice = () => {
    setDeviceList([]);
  };

  // ポップアップの開閉を制御する関数
  const popupOpen = () => setIsPopupOpen(true);
  const popupClose = () => setIsPopupOpen(false);

  const handlePopupSubmit = (src, deviceType, isSideways) => {
    popupClose();
    addDevice(src, deviceType, isSideways);
  };

  return (
    /* メインのページはこの中を書き換えて */
    <>
      <AppBar>
        <Toolbar>
          <h1>Name</h1>
        </Toolbar>
      </AppBar>
      <NoDeviceText className />

      <Popup
        isOpen={isPopupOpen}
        popupClose={popupClose}
        onSubmit={handlePopupSubmit}
      />
      <TrashButton onClick={deleteAllDevice} className={classes.trashButton} />
      {deviceList.map(({ src, deviceType }, index) => {
        if (index === 0) {
          return (
            <Divice1
              src={src}
              deviceType={deviceType}
              key={shortid.generate()}
            />
          );
        } else if (index === 1) {
          return (
            <Divice2
              src={src}
              deviceType={deviceType}
              key={shortid.generate()}
            />
          );
        }
      })}
      <PopupButtonStop></PopupButtonStop>
    </>
  );
};

export default View;
