import React from "react";
import "./Queue.css";
const Queue = ({ lists, setCurrentIndex }) => {
  return (
    <div className="queue-container">
      <h4> Up next </h4>
      <div className="queue-list">
        {lists?.map((list, index) => (
          <div
            className="show-info-queue"
            key={index + "key"}
            onClick={ () => setCurrentIndex(index) }
          >
            <div className="images-info">
              <img
                alt="album art"
                className="track-image"
                src={list?.track?.album?.images[0].url}
              />
              <div className="track-name-playing"> {list?.track?.name} </div>
            </div>
            <p>0:30</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Queue;
