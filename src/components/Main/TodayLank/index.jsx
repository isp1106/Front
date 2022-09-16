import React from 'react'
import { Card } from './Card'

export const TodayLank = () => {
  const lankUsers = [
    {
      userId: 'iHxxx_you',
      profie:
        'https://image.msscdn.net/images/style/detail/29026/detail_29026_1_500.jpg',
      liked: false,
    },
    {
      userId: 'xxxgdragonxxx',
      profie: 'https://image.musinsa.com/mfile_s01/_lookbook/list632286b977ba4',
      liked: true,
    },
    {
      userId: 'wh._l._n._peach',
      profie: 'https://www.musinsa.com/app/goods/1543796',
      liked: true,
    },
    {
      userId: 'lettttsgggo',
      profie:
        'https://image.msscdn.net/images/prd_img/20220830/2755582/detail_2755582_2_500.jpg',
      liked: false,
    },
  ]
  return (
    <div>
      <div>
        {lankUsers.map((user) => (
          <Card data={user} />
        ))}
      </div>
    </div>
  )
}
