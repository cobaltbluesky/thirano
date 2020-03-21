import React from "react";
import {Link} from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Start.css";

const Start = () => {
  return (

    <div>
      <div id = "Information">
        {/* スタートページの内容 */}
      </div>
        <div className = "button-wrapper">
        <Link to = "/view" id = "StartLink" >
          <Button variant = "contained" color = "primary" id = "StartButton">
            さあ、始めよう！
          </Button>
        </Link>
        </div>
    </div>
    
    );
};

export default Start;
