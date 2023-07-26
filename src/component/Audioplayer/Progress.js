import React from 'react' 
import "./Progress.css"

const Circle = ({ color, percentage, size, strokeWidth }) => {
    const radius = size / 2 - 10;
    const circ = 2 * Math.PI * radius - 20;
    const strokePct = ((100 - Math.round(percentage)) * circ) / 100;
  
    return (
      <circle
        r = {radius}
        cx = "50%"
        cy = "50%"
        fill="transparent"
        stroke={strokePct !== circ ? color : ""}
        strokeWidth={strokeWidth}
        strokeDasharray={circ}
        strokeDashoffset={percentage ? strokePct : 0}
        strokeLinecap="round"
      ></circle>
    );
  };


const Progress = ({
    percentage,
    isPlaying,
    size,
    color,
    image,
}) => {
  return (
    <div className='progress-circle'> 
        <svg width={size} height={size} className='circle'>
        <g className='progress-ring'>
          <Circle strokeWidth={"0.4rem"} color="#2e6a7ebd" size={size} />
          <Circle
            strokeWidth={"0.6rem"}
            color={color}
            percentage={percentage}
            size={size}
          />
        </g>
        <defs>
          <clipPath id="myCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 30} fill="#FFFFFF" />
          </clipPath>
          <clipPath id="myInnerCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 80} fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          className={isPlaying ? "active" : ""}
          x={25}
          y={25}
          width={2 * (size / 2 - 25)}
          height={2 * (size / 2 - 25)}
          href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
          clipPath="url(#myCircle)"
        />
        <image
          className={isPlaying ? "active photo" : ""}
          x={65}
          y={65}
          width={2 * (size / 2 - 65)}
          height={2 * (size / 2 - 65)}
          href={image}
          clipPath="url(#myInnerCircle)"
        />
        </svg>
    </div>
  )
}

export default Progress