import React from 'react'

const HeartIcon = ({ fill, width = 36, height = 36 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_201_3731)">
        <path
          d="M30.5808 7.93915C28.0196 5.35296 23.8677 5.35296 21.3065 7.93915L18.0039 11.2739L14.7021 7.93842C13.4178 6.64901 11.7395 6.00062 10.0612 6.00062C8.38295 6.00062 6.70467 6.64901 5.42042 7.93842C2.85921 10.5246 2.85921 14.717 5.42042 17.3032L17.9929 29.9984L18.0002 29.991L18.0083 29.9991L30.5808 17.3113C31.8578 16.0146 32.4999 14.3199 32.4999 12.6252C32.4999 10.9306 31.8578 9.23593 30.5808 7.93915Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_201_3731">
          <rect
            width="29"
            height="24"
            fill="white"
            transform="translate(3.5 6)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default HeartIcon
