import React from "react";
import classes from "./Grid.module.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
const Grid = () => {
  return (
    <div className={classes["grid-container"]}>
      <div className={classes["grid-item"]}>
        <AiFillHtml5 size={150} className={classes["icon"]} />
        <span>HTML</span>
      </div>
      <div className={classes["grid-item"]}>
        <DiCss3 size={150} className={classes["icon"]} /> <span>CSS</span>
      </div>
      <div className={classes["grid-item"]}>
        <DiJavascript1 size={150} className={classes["icon"]} />{" "}
        <span>JavaScript</span>
      </div>
      <div className={classes["grid-item"]}>
        <DiReact size={150} className={classes["icon"]} /> <span>ReactJS</span>
      </div>
      <div className={classes["grid-item"]}>
        <SiRedux size={150} className={classes["icon"]} />{" "}
        <span>React-Redux</span>
      </div>
      <div className={classes["grid-item"]}>
        <SiCsharp size={150} className={classes["icon"]} /> <span>C#</span>
      </div>
    </div>
  );
};

export default Grid;
