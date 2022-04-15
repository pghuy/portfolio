import { useState, forwardRef } from "react";
import classes from "./Qualification.module.css";
import { FaUniversity } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { education, qualification } from "./dataQualification";
const Qualification = forwardRef((props, ref) => {
  const [isEduSelected, setIsEduSelected] = useState(true);
  const [isQualiSelected, setIsQualiSelected] = useState(false);

  const selectHandler = () => {
    if (isEduSelected === true) {
      setIsEduSelected(false);
      setIsQualiSelected(true);
    } else {
      setIsEduSelected(true);
      setIsQualiSelected(false);
    }
  };
  return (
    <section ref={ref} className={classes.qualificationContainer}>
      <h1 className={classes.titleQualification}>Qualification</h1>
      <div className={classes.inner}>
        <div className={classes.switchTitle}>
          <h2
            className={`${isEduSelected ? classes.firstH2Active : ""} ${
              classes.firstH2
            }`}
            onClick={selectHandler}
          >
            <FaUniversity className={classes.iconMainTitle} />
            <span className={classes.mainTitle}>Education</span>
          </h2>
          <h2
            className={`${isQualiSelected ? classes.secondH2Active : ""} ${
              classes.secondH2
            }`}
            onClick={selectHandler}
          >
            <MdWorkOutline className={classes.iconMainTitle} />
            <span className={classes.mainTitle}>Work Experience </span>
          </h2>
        </div>
        <div className={classes.panelContainer}>
          {isEduSelected &&
            education.map((item) => (
              <div className={classes.panel}>
                <img className={classes.schoolLogo}></img>
                <div className={classes.title}>{item.title}</div>
                <div className={classes.school}>{item.school}</div>
                <div className={classes.time}>
                  {item.time} | {item.status}
                </div>
                {/* <div className={classes.description}>{item.description}</div> */}
              </div>
            ))}
          {isQualiSelected &&
            qualification.map((item) => (
              <div className={classes.panel}>
                <img className={classes.schoolLogo}></img>
                <div className={classes.title}>{item.title}</div>
                <div className={classes.school}>{item.school}</div>
                <div className={classes.time}>
                  {item.time} | {item.status}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
});

export default Qualification;
