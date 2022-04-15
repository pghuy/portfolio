import React, { forwardRef } from "react";
import classes from "./About.module.css";
const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={classes.aboutContainer}>
      <h3 className={classes.title}>About</h3>
      <h4 className={classes.subtitle}>A little bit about me</h4>
      <div className={classes.maxWidth}>
        <div className={classes.aboutContent}>
          <div>
            My journey in studying information technology began in 2021 when I
            found out that computer and coding is the thing that I want to dive
            into. I am currently a half-time student of HCMUS majoring in IT and
            looking for a full-time Front-end web developer fresher/internship
            position. I'm quietly confident, naturally curious, passionate about
            finding documents related to on-solve problems, and perpetually
            working on enhancing my ability in coding.
          </div>
          <img src=""></img>
        </div>
      </div>
    </div>
  );
});

export default About;
