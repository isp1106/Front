import React from 'react'
import './index.css'
const list = [
  {
    id: 1,
    imgUrl:
      'https://image.msscdn.net/display/images/usersnap/2022/08/23/c2d3958fe2b54c6eb36510901b83679b_main.jpg',
    brnadurl:
      'https://image.msscdn.net/images/goods_img/20190502/1032990/1032990_1_320.jpg',
    brnad: '스티그마',
    price: 1080,
    discount: 10,
    like: 4412,
  },
  {
    id: 2,
    imgUrl:
      'https://image.msscdn.net/display/images/usersnap/2022/08/19/26225f44558d48ba9535c5b3600fdb61_main.jpg',
    brnadurl:
      'https://image.msscdn.net/images/goods_img/20220804/2697220/2697220_1_320.jpg',
    brnad: '마하그리드',
    price: 5310,
    discount: 10,
    like: 3620,
  },
  {
    id: 3,
    imgUrl:
      'https://image.msscdn.net/display/images/usersnap/2022/08/26/34de071e5d0d4a79bb416541aff0fc99_main.jpg',
    brnadurl:
      'https://image.msscdn.net/images/goods_img/20220330/2457811/2457811_1_320.jpg',
    brnad: '디파이클럽로버스',
    price: 3680,
    discount: 20,
    like: 3251,
  },
  {
    id: 4,
    imgUrl:
      'https://image.msscdn.net/display/images/usersnap/2022/08/20/71a2ea941ddb4d198be12b6de4ac635e_main.jpg',
    brnadurl:
      'https://image.msscdn.net/images/goods_img/20220119/2315824/2315824_1_320.jpg',
    brnad: '마리떼',
    price: 4900,
    discount: 0,
    like: 2688,
  },
  {
    id: 5,
    imgUrl:
      'https://image.msscdn.net/display/images/usersnap/2022/09/01/2876335f6b2f487a8236ae0c947c522e_main.jpg',
    brnadurl:
      'https://image.msscdn.net/images/goods_img/20210907/2113397/2113397_2_320.jpg',
    brnad: '커스텀에이드',
    price: 9265,
    discount: 15,
    like: 2477,
  },
  {
    id: 6,
    imgUrl:
      'https://image.msscdn.net/display/images/usersnap/2022/08/30/d7d2a9543bd24b8faa7b30b9fcfdac97_main.jpg',
    brnadurl:
      'https://image.msscdn.net/images/goods_img/20220127/2334259/2334259_2_320.jpg',
    brnad: '엠엘비',
    price: 3600,
    discount: 0,
    like: 2313,
  },
]
const NewStyle = () => {
  return (
    <div className="mt-[35px]">
      <h4 className="font-bold mb-5 pl-5">오늘의 뉴 스타일</h4>
      <div className="product__list">
        {list.map((item, index) => (
          <div key={index} className="item">
            <img src={item.imgUrl} />
            <div className="flex gap-3 item py-2 pl-2">
              <div
                className="w-[43px] h-[43px] bg-cover"
                style={{
                  backgroundImage: `url(${item.brnadurl})`,
                }}
              ></div>
              <div className="flex flex-col gap-1 text-sm font-medium">
                <div className="font-semibold text-primary">{item.brnad}</div>
                <div className="flex gap-2">
                  <span className="font-bold text-primary">
                    {item.discount && item.discount}%
                  </span>
                  <span className="font-bold">{item.price}¥</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewStyle
