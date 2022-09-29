import React from 'react'

const SearchIcon = ({ fill = '#D86145', size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_201_3732)">
        <path
          d="M25.8176 24.5701L24.5479 25.8359L30.2269 31.4979L31.4966 30.232L25.8176 24.5701Z"
          fill={fill}
        />
        <path
          d="M15.9268 27.2848C9.62576 27.2848 4.5 22.1745 4.5 15.8924C4.5 9.61031 9.62576 4.5 15.9268 4.5C22.2279 4.5 27.3537 9.61031 27.3537 15.8924C27.3537 22.1745 22.2279 27.2848 15.9268 27.2848ZM15.9268 6.29024C10.6134 6.29024 6.29565 10.5949 6.29565 15.8924C6.29565 21.1899 10.6134 25.4946 15.9268 25.4946C21.2403 25.4946 25.558 21.1899 25.558 15.8924C25.558 10.5949 21.2403 6.29024 15.9268 6.29024Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_201_3732">
          <rect
            width="27"
            height="27"
            fill="white"
            transform="translate(4.5 4.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SearchIcon