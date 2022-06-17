import React from "react";
import classes from "./componentsCss/smallCard.module.css";
import { Link } from "react-router-dom";

function SmallCard({ device }) {
  return (
    <div className={classes.small_card}>
      <div
        style={{
          backgroundImage: `url(${device.image})`,
        }}
      >
        <i className="far fa-heart"></i>
      </div>
      <Link className="links" to={`/device/${device.id}`}>
        <h4>{device.name}</h4>
        <h5>${device.price}</h5>
      </Link>
    </div>
  );
}

export default SmallCard;
