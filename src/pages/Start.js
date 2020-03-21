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
          <Button variant = "contained" color = "primary" id = "StartButton">
            <Link to = "/view" id = "StartLink" >さあ、始めよう！</Link>
          </Button>
        </div>
    </div>
    
    );
};

export default Start;
