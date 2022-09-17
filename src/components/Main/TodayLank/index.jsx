import React from 'react'
import { Card } from './Card'

export const TodayLank = () => {
  const lankUsers = [
    {
      userId: 'anywhere_lexgo',
      profile:
        'https://image.msscdn.net/images/goods_img/20220906/2772999/2772999_6_500.jpg?t=20220916155723',
      liked: false,
    },
    {
      userId: 'seon.nna',
      profile:
        'https://image.musinsa.com/mfile_s01/cms-files/63216dd7f1a3c6.93351224.jpg',
      liked: true,
    },
    {
      userId: 'wh._.p__ch',
      profile:
        'https://image.msscdn.net/images/goods_img/20200810/1543796/1543796_3_500.jpg?t=20200901141136',
      liked: true,
    },
    {
      userId: 'iHxxx_you',
      profile:
        'https://image.musinsa.com/mfile_s01/2022/01/24/85b6f89b41cae26786ac72365fff771b112441.jpg',
      liked: false,
    },
  ]
  return (
    <div className="mb-24">
      <div className="text-xl font-bold ml-5 mb-5 mt-20">
        <span className="text-primary">오늘</span>의 랭크
      </div>
      <div className="w-full grid grid-cols-2 border-t-2 border-primary">
        {lankUsers.map((user, index) => (
          <Card data={user} key={index} />
        ))}
      </div>
    </div>
  )
}
