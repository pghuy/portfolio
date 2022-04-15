import React from "react";
import classes from "./Figure.module.css";
const Figure = (props) => {
  return (
    <div className={classes.figureContainer}> 
      <img onClick={props.onClickFigure}
        alt="avatar"
      />
    </div>
  );
};

export default Figure;
