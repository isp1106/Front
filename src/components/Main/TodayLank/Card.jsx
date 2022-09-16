import React from 'react'
import heartOn from '/public/assets/heart-on.svg'
import heartOff from '/public/assets/heart.svg'

export const Card = ({ data }) => {
  const { userId, profile, liked } = data
  return (
    <div>
      <div>
        <img src={profile} alt={userId} />
      </div>
      <div>
        <div>{userId}</div>
        {liked ? (
          <img src={heartOn} alt="heart on" />
        ) : (
          <img src={heartOff} alt="heart off" />
        )}
      </div>
    </div>
  )
}
