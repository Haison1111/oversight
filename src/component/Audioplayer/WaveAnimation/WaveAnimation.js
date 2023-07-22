import React from "react";
import "./WaveAnimation.css";

const WaveAnimation = ({isPlaying}) => {
  const waveClass = isPlaying? "wave" : "delay" ;
  return (
    <div class="center">
      <div class={waveClass}></div>
      <div class={waveClass}></div>
      <div class={waveClass}></div>
      <div class={waveClass}></div>
      <div class={waveClass}></div>
      <div class={waveClass}></div>
      <div class={waveClass}></div>
      <div class={waveClass}></div>
      <div class={waveClass}></div>
      <div class={waveClass}></div>
    </div>
  );
};

export default WaveAnimation;
