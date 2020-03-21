import React from "react";
import {Link} from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Start.css";

const Start = () => {
  return (

    <div>
      <h1>{/*仮タイトル */}Hello警報</h1>
      <ul id = "Informations">
        {/* 
          要素の数は仮
          説明の内容はgunjouさんお願いします 
          */}
          <li>
            <h2>説明A</h2>
            <div classname = "explanations">説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</div>
          </li>
          <li>
          <h2>説明B</h2>
          <div classname = "explanations">説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</div>            
          </li>
          <li>
          <h2>説明C</h2>
          <div classname = "explanations">説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</div>            
          </li>
          <li>
          <h2>説明D</h2>
          <div classname = "explanations">説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</div>          
          </li>
      </ul>
      
      {/* viewに遷移するボタン */}
      <div className = "button-wrapper">
        <Link to = "/view" id = "StartLink" >
          <Button variant = "contained" color = "primary" id = "StartButton">さあ、始めよう！</Button>
        </Link>
      </div>
    </div>
    
    );
};

export default Start;
