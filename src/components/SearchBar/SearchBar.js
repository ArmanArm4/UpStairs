import React, { useState } from "react";
import classes from "./searchBar.module.css";
import SearchResult from "./SearchResult";

function SearchBar({ searchBarHandler, filteredDevices }) {
  // console.log(filteredDevices);
  const [isEmpty, setisEmpty] = useState("");

  return (
    <div className={`${classes.parent} ${isEmpty && classes.notEmpty}`}>
      <div className={classes.searchBar}>
        <i className="fas fa-search"></i>

        <input
          placeholder="Search..."
          type="text"
          onChange={e => {
            searchBarHandler(e.target.value);
            if (filteredDevices) {
              setisEmpty(true);
            }
            if (!e.target.value) {
              setisEmpty(false);
            }
          }}
        />
      </div>
      <div className={classes.results}>
        {filteredDevices.map(filteredDevice => (
          <SearchResult
            key={filteredDevice.id}
            filteredDevice={filteredDevice}
          ></SearchResult>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
