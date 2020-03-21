import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import shortid from 'shortid';

import AddButton from "../components/AddButton";
import Divice1 from '../components/Device1';

const useStyles = makeStyles(theme => ({
  addButton: {
    position: "fixed",
    bottom: "25px",
    right: "25px"
  }
}));

const View = () => {
  const classes = useStyles();
  const [deviceList, setDeviceList] = useState([]);
  const addDevice = () => {
    // 画面が1枚以上あったら表示しない
    if (deviceList.length >= 1) return;

    const newDevice = {
      src: "", // url
      device: "", // deviceの名前
      isExistFrame: false, // スマホやタブレットの枠が存在するか
      isSideways: true // デバイスが横向いてるか
    };

    // 更新
    setDeviceList([...deviceList, newDevice]);
  };
  return (
    /* メインのページはこの中を書き換えて */
    <>
      {deviceList.map(() => <Divice1 key={shortid.generate()}/>)}
      <AddButton className={classes.addButton} onClick={addDevice}/>
    </>
  );
};

export default View;
