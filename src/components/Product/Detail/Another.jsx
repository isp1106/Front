import React from 'react'
import { detailProducts } from '../../../dummy/detail'
import HeartIcon from '../../common/HeartIcon'

const Another = () => {
  return (
    <div className="pl-5">
      <h4 className="font-bold my-4">비슷한 상품</h4>
      <div className="flex gap-5 overflow-x-scroll">
        {detailProducts.another.map(
          ({ id, thumbnail, product, price, sale, liked }) => (
            <div key={id}>
              <div
                className="new-style w-[142px] h-[142px] bg-cover rounded-full overflow-hidden border-primary border"
                style={{
                  backgroundImage: `url(${thumbnail})`,
                }}
              ></div>
              <p className="px-2 mt-3 text-[10px] text-black-800 truncate w-[142px]">
                {product}
              </p>
              <div className="px-2 flex justify-between items-center  pb-2">
                <div>
                  <span className="text-primary text-sm mr-3 font-bold">
                    {sale} %
                  </span>
                  <span className="text-sm font-bold">
                    {parseInt((price * (100 - sale)) / 100)} ¥
                  </span>
                </div>
                <HeartIcon size="15" off={!liked} />
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export default Another
