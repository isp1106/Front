import React from 'react'
import { detailProducts } from '../../../dummy/detail'
import HeartIcon from '../../common/HeartIcon'
import { useGetProductsQuery } from '../../../store/api/productApiSlice'

const Similiar = ({ tag }) => {
  const { data } = useGetProductsQuery()
  let items
  items = data
    ?.filter((item) => item.tags.includes(tag[3]))
    .filter((item) => item.tags.includes(tag[2]))

  return (
    <div className="pl-5">
      <div className="flex justify-between pr-5 items-center">
        <h4 className="font-bold my-4">비슷한 상품</h4>
        <span className="text-sm text-black-600 font-medium">더보기</span>
      </div>
      <div className="flex gap-5 overflow-x-scroll">
        {items ? (
          items?.map((item, idx) => (
            <div key={idx}>
              <div
                className="w-[130px] h-[131px] bg-cover"
                style={{
                  backgroundImage: `url(${item.thumbnail})`,
                }}
              ></div>
              <div className="flex justify-between items-center mt-1 px-2">
                <span className="text-sm font-bold truncate overflow-ellipsis w-[130px]">
                  {item.brand}
                </span>
                <HeartIcon size="15" off={item.liked} />
              </div>
              <div className=" overflow-ellipsis text-[10px] text-black-800 truncate w-[125px] px-2 mt-2">
                {item.productName}
              </div>
              <div className="px-2 flex justify-between items-center border-b border-primary pb-2">
                <span className="text-primary text-sm">{item.sale} %</span>
                <span className="text-sm">
                  {parseInt(
                    (item.price * (100 - item.sale)) / 100,
                  ).toLocaleString()}{' '}
                  ¥
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="px-5 text-xs text-black-600">
            비슷한 상품이 없습니다.
          </div>
        )}
      </div>
    </div>
  )
}

export default Similiar
