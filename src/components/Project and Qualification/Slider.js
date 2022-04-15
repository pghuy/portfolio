import { useState, useEffect, forwardRef } from "react";

import Card from "./Card";
import data from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import classes from "./Slider.module.css";

const Slider = forwardRef((props, ref) => {
  const [projects, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let lastIndex = projects.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, projects]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <section ref={ref} className={classes.slider}>
      <Card>
        {projects.map((project, projectIndex) => {
          let identifier;
          if (projectIndex === index) {
            identifier = classes.activeSlide;
          }
          if (
            projectIndex === index - 1 ||
            (index === 0 && projectIndex === projects.length - 1)
          ) {
            identifier = classes.lastSlide;
          }
          if (
            projectIndex === index + 1 ||
            (index === projects.length - 1 && projectIndex === 0)
          ) {
            identifier = classes.nextSlide;
          }
          const clickItemHandler = () => {
            if (identifier === classes.nextSlide) {
              setIndex(index + 1);
            }
            if (identifier === classes.lastSlide) {
              setIndex(index - 1);
            }
          };
          return (
            <article
              className={identifier}
              key={project.id}
              onClick={clickItemHandler}
            >
              <div className={`${classes.imgOverlayContainer} ${identifier}`}>
                <img
                  className={`${classes.img} ${identifier}`}
                  src={project.image}
                  alt="thumbnail"
                />
                <div className={`${classes.overlay}`}>
                  <div className={classes.container1InsideOverlay}>
                    <a href={project.git} target="_blank">
                      <AiFillGithub className={classes.iconOverlay} />
                    </a>
                    <a href={project.demo} target="_blank">
                      <FaExternalLinkAlt className={classes.iconOverlay} />
                    </a>
                  </div>
                  <div className={classes.container2InsideOverlay}>
                    {project.tools.map((tool) => {
                      return <div className={classes.tool}>{tool}</div>;
                    })}
                  </div>
                </div>
              </div>

              <h3 className={`${classes.name} ${identifier}`}>
                {project.name}
              </h3>
              <p className={`${classes.title} ${identifier}`}>
                {project.title}
              </p>
            </article>
          );
        })}

        <button className={classes.prev} onClick={() => setIndex(index - 1)}>
          <FaChevronLeft />
        </button>
        <button className={classes.next} onClick={() => setIndex(index + 1)}>
          <FaChevronRight />
        </button>
      </Card>
    </section>
  );
});

export default Slider;
