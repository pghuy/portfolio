import React, { forwardRef, useState, useEffect } from "react";
import classes from "./Intro.module.css";
import Typing from "./Typing";
import Figure from "./Figure";
const Intro =   forwardRef((props, ref) => {
  return (
    <div ref={ref} className={classes.intro}>
      <div className={classes.textContainer}>
        <div className={classes.text1}>Hello, My name is</div>
        <div className={classes.text2}>Gia Huy</div>
        <div className={classes.text3}>
          I'm <Typing className={classes.typing} />
        </div>
      </div>
      <Figure onClickFigure={props.onClickFigure}/>
    </div>
  );
});

export default Intro;
