import React from "react";

function ColorBtn({ className, setActiveColor, id, activeColor }) {
  const active = () => {
    setActiveColor(id);
  };
  return (
    <div
      onClick={active}
      className={`${className} ${activeColor === id && "activeBtn"}`}
    ></div>
  );
}

export default ColorBtn;
