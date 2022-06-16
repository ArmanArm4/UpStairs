import React from "react";
import classes from "./componentsCss/SectionText.module.css";

function SectionText({ value }) {
  return <h3 className={classes.h3}>{value}</h3>;
}

export default SectionText;
