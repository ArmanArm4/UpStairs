import React from "react";
import classes from "./SearchResult.module.css";
import { useNavigate } from "react-router-dom";

function SearchResult(filteredDevice) {
  let navigate = useNavigate();
  const name = filteredDevice.filteredDevice.name;
  const id = filteredDevice.filteredDevice.id;
  return (
    <div
      onClick={() => {
        navigate(`/device/${id}`);
      }}
      className={classes.result}
    >
      <p>{name}</p>
    </div>
  );
}

export default SearchResult;
