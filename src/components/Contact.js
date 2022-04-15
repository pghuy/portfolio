import { forwardRef, useState } from "react";
import classes from "./Contact.module.css";
import { FiPhone, FiMail } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import apiKey from "../apiKey";
import { send } from "@emailjs/browser";
import useInput from "../hook/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Contact = forwardRef((props, ref) => {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (nameIsValid && messageIsValid && emailIsValid) {
    formIsValid = true;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    send(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, toSend, apiKey.USER_ID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        console.log("Submitted");
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    resetName();
    resetMessage();
    resetEmail();
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const nameContactContent = nameHasError
    ? `${classes["contactContent"]} ${classes["contactContent-invalid"]}`
    : `${classes["contactContent"]}`;
  const messageContactContent = messageHasError
    ? `${classes["contactContent"]} ${classes["contactContent-invalid"]}`
    : `${classes["contactContent"]}`;
  const emailContactContent = emailHasError
    ? `${classes["contactContent"]} ${classes["contactContent-invalid"]}`
    : `${classes["contactContent"]}`;
  return (
    <div ref={ref} className={classes.contactContainer}>
      <h2>Contact me</h2>
      <h4>Get in touch</h4>
      <div className={classes.maxWidth}>
        <div>
          <div className={classes.subContactContainer}>
            <FiPhone
              size={classes.iconContact.size}
              className={classes.iconContact}
            />
            <div>
              <div className={classes.contactTitle}>Call me</div>
              <div className={classes.contactInfo}>0931461884</div>
            </div>
          </div>
          <div className={classes.subContactContainer}>
            <FiMail
              size={classes.iconContact.size}
              className={classes.iconContact}
            />
            <div>
              <div className={classes.contactTitle}>Email me</div>
              <div className={classes.contactInfo}>phamgiahuy969@gmail.com</div>
            </div>
          </div>
          <div className={classes.subContactContainer}>
            <FiMail
              size={classes.iconContact.size}
              className={classes.iconContact}
            />
            <div>
              <div className={classes.contactTitle}>My Location</div>
              <div className={classes.contactInfo}>HCM City, Vietnam</div>
            </div>
          </div>
        </div>
        <form
          className={classes.contactContactContainer}
          onSubmit={handleSubmit}
          name="form"
        >
          <div className={nameContactContent}>
            {nameHasError ? (
              <label className="error-text">Please enter your name.</label>
            ) : (
              <label htmlFor="name">Name</label>
            )}

            <input
              name="name"
              value={nameValue}
              onChange={(e) => {
                handleChange(e);
                nameChangeHandler(e);
              }}
              onBlur={nameBlurHandler}
              type="text"
              className={classes["input-control"]}
            />
          </div>
          <div className={emailContactContent}>
            {emailHasError ? (
              <label className="error-text">Please enter a correct email</label>
            ) : (
              <label htmlFor="email">Email</label>
            )}
            <input
              name="email"
              value={emailValue}
              onChange={(e) => {
                handleChange(e);
                emailChangeHandler(e);
              }}
              onBlur={emailBlurHandler}
              type="text"
              className={classes["input-control"]}
            />
          </div>
          <div className={messageContactContent}>
            {messageHasError ? (
              <label className="error-text">Please enter your message</label>
            ) : (
              <label htmlFor="message">Message</label>
            )}
            <textarea
              name="message"
              value={messageValue}
              onChange={(e) => {
                handleChange(e);
                messageChangeHandler(e);
              }}
              onBlur={messageBlurHandler}
              type="text"
              className={`${classes["input-control"]} ${classes.textArea}`}
            />
          </div>
          <button
            className={classes.sendButton}
            type="submit"
            disabled={!formIsValid}
          >
            Send Message <AiOutlineSend />
          </button>
        </form>
      </div>
    </div>
  );
});

export default Contact;
