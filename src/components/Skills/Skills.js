import React, { forwardRef } from "react";
import Grid from "./Grid";
import classes from "./Skills.module.css";
const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={classes.skillsContainer}>
      <div className={classes.maxWidth}>
        <h3 className={classes.title}>Skills</h3>
        <Grid />
      </div>
    </div>
  );
});

export default Skills;
