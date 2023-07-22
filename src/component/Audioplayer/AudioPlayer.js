import React, { useEffect, useRef, useState } from "react";
import "./AudioPlayer.css";
import Controls from "./Controls/Controls";
import Progress from "./Progress";
import WaveAnimation from "./WaveAnimation/WaveAnimation";

const AudioPlayer = ({
  currentTrack,
  currentIndex,
  setCurrentIndex,
  total,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [trackProgress, setTrackProgress] = useState(0);

  var audioSrc = total[currentIndex]?.track.preview_url;

  const audioRef = useRef(new Audio(total[0]?.track.preview_url));

  const intervalRef = useRef();

  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;
  
  const handleNext = () => {
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else setCurrentIndex(0);
  };

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef.current.play()
        startTimer();
      } else if(!isPlaying) {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
    // potential bug 2!!
      if (isPlaying) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play()
        startTimer()
        ;
        
      } else if(!isPlaying) {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying,audioSrc,startTimer]);


  // potential bug !!
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else if(!isReady.current) {
      isReady.current = true;
      audioRef.current.pause()
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  

  const handlePrev = () => {
    if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  const addZero = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };

  const artists = currentTrack?.album?.artists[0].name;
  //  currentTrack?.album?.artist?.forEach((e) => {
  //    artists.push(e.name)
  //  });

  return (
    <div className="audio-center">
      <Progress
        percentage={currentPercentage}
        isPlaying={isPlaying}
        image={currentTrack?.album?.images[0]?.url}
        size={300}
        color="rgb(153, 245, 247)"
      />
      <div className="player-info">
        <div className="player-songs-name">{currentTrack?.name} </div>
        <div className="player-artist"> {artists} </div>
      </div>
      <div className="control-center">
        <p className="duration"> 0:{addZero(Math.round(trackProgress))} </p>
        <WaveAnimation isPlaying={isPlaying} />
        <p className="duration"> 0:30 </p>
      </div>
      <Controls
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        handleNext={handleNext}
        handlePrevious={handlePrev}
        total={total}
      />
    </div>
  );
};

export default AudioPlayer;
