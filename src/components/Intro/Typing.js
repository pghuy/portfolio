import React, { useState, useEffect } from "react";

const words = ["a developer", "a traveller","a learner"];
const Typing = (props) => {
  const [index, setIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);
  // Logic in special cases
  useEffect(() => {
    // if it is the last word and the last letter of the last word --> stop
    if (index === words.length - 1 && letterIndex === words[index].length) {
      return;
    }
    // if it has already type a word completely and that word is not the last word and reverse is off then
    // --> do reverse
    if (
      letterIndex === words[index].length + 1 &&
      !reverse &&
      index !== words.length - 1
    ) {
      setReverse(true);
      return;
    }
    // if reverse back to the point where is the begining of a new word
    // shift index to the new word start typing
    if (letterIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }
    const timeout = setTimeout(() => {
      setLetterIndex((prev) => prev + (reverse ? -1 : 1)); // if reverse the subtract the letterIndex , if not reverse then plus
    }, Math.max(reverse ? 75 : letterIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));
    return () => clearTimeout(timeout); // do  random time to make it more real
  }, [index, letterIndex, reverse]);

  // Blink for the control (con trỏ)
  useEffect(() => {
    const timeoutBlink = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeoutBlink);
  }, [blink]);
  return (
    <span className={props.className}>{`${words[index].substring(
      0,
      letterIndex
    )}${blink ? "|" : ""}`}</span>
  );
};

export default Typing;
