import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { detailProducts } from '../../../dummy/detail'
import HeartIcon from '../../common/HeartIcon'
import { useGetProductQuery } from '../../../store/api/productApiSlice'
import { useGetProductsQuery } from '../../../store/api/productApiSlice'

const Another = () => {
  const params = useParams()
  const { data } = useGetProductQuery(params.id)
  const navigate = useNavigate()
  const { data: datas } = useGetProductsQuery()
  const list = datas?.filter((item) => item.brand === data.brand)

  return (
    <div className="pl-5">
      <div className="flex justify-between pr-5 items-center">
        <h4 className="font-bold my-4">브랜드의 다른상품</h4>
        <span className="text-sm text-black-600 font-medium">더보기</span>
      </div>
      <div className="flex gap-5 overflow-x-scroll">
        {list?.map(
          ({ productId, thumbnail, productName, price, sale, liked }) => (
            <div
              key={productId}
              onClick={() => navigate(`/product/${productId}`)}
            >
              <div
                className="new-style w-[142px] h-[142px] bg-cover rounded-full overflow-hidden border-primary border"
                style={{
                  backgroundImage: `url(${thumbnail})`,
                }}
              ></div>
              <p className="px-2 mt-3 text-[10px] text-black-800 truncate w-[142px]">
                {productName}
              </p>
              <div className="px-2 flex justify-between items-center  pb-2">
                <div>
                  <span className="text-primary text-sm mr-3 font-bold">
                    {sale} %
                  </span>
                  <span className="text-sm font-bold">
                    {parseInt((price * (100 - sale)) / 100).toLocaleString()} ¥
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
