import React from "react"; 
import "./Playcard.css"
import {AiFillPlayCircle} from "react-icons/ai"

const Playcard = ({id,handleClick,images,name,songs}) => {
  return (
    <div
      className="playlist-card"
      key={id}
      onClick={handleClick}
    >
      <div className="playlist-hover">
        <AiFillPlayCircle className="play-logo" />
      </div>
      <img
        src={images}
        className="playlist-image"
        alt="playlist-art"
      />
      <p className="tilte-playlist"> {name} </p>
      <p> {songs} Songs </p>
    </div>
  );
};

export default Playcard;
