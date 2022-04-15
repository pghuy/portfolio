import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./NavBar.module.css";
const NavBar = (props) => {
  // Sticky NavBar
  const [sticky, setSticky] = useState(window.screenY > 0 ? true : false); // check the begining position after reload;
  const [clickMenuIconCollapsed, setClickMenuIconCollapsed] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 5) {
      setSticky(true);
    } else {
      if (sticky === true) {
        setSticky(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sticky]);

  // Responsive NavBar
  const onClickMenuIconCollapsed = () => {
    setClickMenuIconCollapsed((prev) => !prev);
  };
  console.log("render");
  return (
    <div className={`${classes.nav} ${sticky && classes["nav-sticky"]}`}>
      <div
        className={` ${classes["nav-content"]} ${
          sticky && classes["nav-sticky-content"]
        }`}
      >
        <div className={classes.text}>
          pg<span>huy</span>
        </div>

        <ul className={classes["menuBar"]}>
          <li
            className={classes.navItem}
            onClick={() => {
              props.onBackClick("intro");
            }}
          >
            Home
          </li>
          <li
            className={classes.navItem}
            onClick={() => {
              props.onBackClick("about");
            }}
          >
            About
          </li>
          <li
            className={classes.navItem}
            onClick={() => {
              props.onBackClick("skills");
            }}
          >
            Skills
          </li>
          <li
            className={classes.navItem}
            onClick={() => {
              props.onBackClick("project");
            }}
          >
            Projects
          </li>
          <li
            onClick={() => {
              props.onBackClick("qualification");
            }}
            className={classes.navItem}
          >
            Qualification
          </li>
          <li
            className={classes.navItem}
            onClick={() => {
              props.onBackClick("contact");
            }}
          >
            Contact
          </li>
        </ul>

        <div
          className={classes["menu-icon"]}
          onClick={onClickMenuIconCollapsed}
        >
          <AiOutlineMenu size={30} />
        </div>
      </div>
      {clickMenuIconCollapsed && (
        <ul
          className={!sticky ? classes.menuBarDrop : classes.menuBarDropSticky}
        >
          <li
            className={`${classes.navItemDrop} ${
              sticky && classes.navItemDropSticky
            }  `}
            onClick={() => {
              props.onBackClick("intro");
            }}
          >
            Home
          </li>
          <li
            className={`${classes.navItemDrop} ${
              sticky && classes.navItemDropSticky
            }  `}
            onClick={() => {
              props.onBackClick("about");
            }}
          >
            About
          </li>
          <li
            className={`${classes.navItemDrop} ${
              sticky && classes.navItemDropSticky
            }  `}
            onClick={() => {
              props.onBackClick("skills");
            }}
          >
            Skills
          </li>
          <li
            className={`${classes.navItemDrop} ${
              sticky && classes.navItemDropSticky
            }  `}
            onClick={() => {
              props.onBackClick("project");
            }}
          >
            Projects
          </li>
          <li
            className={`${classes.navItemDrop} ${
              sticky && classes.navItemDropSticky
            }  `}
            onClick={() => {
              props.onBackClick("qualification");
            }}
          >
            Qualification
          </li>
          <li
            className={`${classes.navItemDrop} ${
              sticky && classes.navItemDropSticky
            }  `}
            onClick={() => {
              props.onBackClick("contact");
            }}
          >
            Contact
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
