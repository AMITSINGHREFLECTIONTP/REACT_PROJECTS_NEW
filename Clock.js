import React, { useState } from "react";
import "./Clock.css";

function Clock() {
  let times = new Date().toLocaleTimeString();

  const [newtime, setNewtime] = useState(times);

  const updateTime = () => {
    times = new Date().toLocaleTimeString();
    setNewtime(times);
  };

  setInterval(updateTime, 1000);
  return (
    <div className="parent">
      <div className="child">
        <h1>Digital Clock</h1>
        <div className="c_time">{newtime}</div>
      </div>
    </div>
  );
}

export default Clock;
