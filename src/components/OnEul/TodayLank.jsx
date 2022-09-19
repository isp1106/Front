import React from 'react'
import { ReactComponent as HeartIconOn } from '/public/assets/heart-white.svg'
import { ReactComponent as HeartIcon } from '/public/assets/heart-on.svg'

//더미 데이터
const list = [
  {
    id: 1,
    url: 'https://image.msscdn.net/display/images/usersnap/2022/09/15/56da9bc7dc404935b0d307540a434e00_main.jpg',
    userId: '0seo8',
    like: 2042,
  },
  {
    id: 2,
    url: 'https://image.msscdn.net/display/images/usersnap/2022/09/17/0390dfc80363465f977c84de06d156b0_main.jpg',
    userId: 'whilyn',
    like: '2341',
  },
  {
    id: 3,
    url: 'https://image.msscdn.net/display/images/usersnap/2022/09/17/3e4a23c729874432a8acd9629490e4e2_main.jpg',
    userId: 'dayoung',
    like: '1341',
  },
]

const TodayLank = () => {
  return (
    <div className="mt-11 pl-5">
      <h4 className="font-bold mb-5">오늘의 랭크</h4>
      <div className="flex gap-4 overflow-x-scroll">
        {list.map((item, index) => (
          <div key={index}>
            <div
              className="w-[225px] h-[260px] bg-cover relative rounded-md"
              style={{
                backgroundImage: `url(${item.url})`,
              }}
            >
              <div className="absolute right-2 bottom-2 flex flex-col justify-center items-center">
                <HeartIconOn width="22px" height="22px" />
                <span className="text-white text-[14px]">{item.like}</span>
              </div>
            </div>
            <div className="w-[225px] flex justify-between items-center text-primary">
              <span>@ {item.userId}</span>
              <div className="flex py-1 gap-1">
                <HeartIcon width="22px" height="22px" />
                <span className="text-[14px]">{item.like}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodayLank
