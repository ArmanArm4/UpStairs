import React from "react";

function MemoryBtn({
  className,
  setActiveMemory,
  id,
  activeMemory,
  deviceMemoryHandler,
}) {
  const active = () => {
    setActiveMemory(id);
  };
  return (
    <div
      onClick={active}
      className={`${className} ${activeMemory === id && "activeBtn"}`}
    >
      {id[0]} GB
    </div>
  );
}

export default MemoryBtn;
