import React, { forwardRef } from "react";
import classes from "./Container.module.css";
import Slider from "./Slider";
import Qualification from "./Qualification";
const Container = forwardRef((props, ref) => {
  console.log(ref);
  return (
    <div ref={ref.projectRef} className={classes.container}>
      {/* <img
        src="https://2.pik.vn/2022703ef2d0-0e61-45cc-b86e-1ef64d6ced02.png"
        alt=""
      /> */}
      <div className={classes.maxWidth}>
        <h1 className={classes.titleProject}>Projects</h1>
        <Slider />
        <Qualification ref={ref.qualificationRef} />
      </div>
    </div>
  );
});

export default Container;
