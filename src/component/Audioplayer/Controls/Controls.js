import React from "react";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlay, IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import "./Controls.css";

const Controls = ({
  handleNext,
  handlePrevious,
  total,
  isPlaying,
  setIsPlaying,
}) => {
  return <IconContext.Provider value={{ size: "35px"}}>
  <div className="controls-wrapper ">
    <div className="action-btn " onClick={handlePrevious}>
      <IoPlaySkipBack />
    </div>
    <div
      className= "play-pause-btn "
      onClick={() => setIsPlaying(!isPlaying)}
    >
      {isPlaying ? <FaPause /> : <IoPlay />}
    </div>
    <div className="action-btn flex" onClick={handleNext}>
      <IoPlaySkipForward />
    </div>
  </div>
</IconContext.Provider>
};

export default Controls;
