import React from "react";
import classes from "./Footer.module.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className={classes.footerContainer}>
      <div className={classes.maxWidth}>
        <div className={classes.gridContainer}>
          <div className={classes.iconText}>
            pg<span>huy</span>
          </div>
          <div>
            {/* Work Hard
            <br />
            Play Fun */}
          </div>
          <div>
            <a href="https://www.facebook.com/gia.huy.775" target="_blank">
              <AiFillFacebook className={classes.icon} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <AiFillInstagram className={classes.icon} />
            </a>
            <a href="https://twitter.com/HuyPGG" target="_blank">
              <AiOutlineTwitter className={classes.icon} />
            </a>
          </div>
        </div>
        <p className={classes.text}>© pghuy. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
