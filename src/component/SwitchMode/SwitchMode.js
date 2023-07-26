import React from "react";
import "./SwitchMode.css"

const SwitchMode = ({darkMode}) => {
  return (
    <label className="ui-switch">
  <input type="checkbox" onClick={darkMode}/>
  <div className="slider">
    <div className="circle"></div>
  </div>
</label>
  );
};

export default SwitchMode;
