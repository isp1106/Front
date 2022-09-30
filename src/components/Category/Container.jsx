import React, { useState } from 'react'
import Card from './Card'
import { likedList } from '~/dummy/liked'

function Container() {
  return (
    <div className="pt-44">
      <div className="w-full grid grid-cols-2 gap-1">
        {likedList.map((item, idx) => (
          <Card key={idx} data={item} />
        ))}
      </div>
    </div>
  )
}

export default Container
