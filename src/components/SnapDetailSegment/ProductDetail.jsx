import React from 'react'
import { snapDetailList } from '../../dummy/relatedProduct'
const ProductDetail = () => {
  const list = snapDetailList
  return (
    <ul className="mt-5 flex justify-between">
      {list.map((item, index) => (
        <li className="" key={index}>
          <div
            className="w-[5.375rem] h-[5.375rem] rounded-[0.313rem]"
            style={{
              backgroundImage: `url(${item.imgUrl})`,
            }}
          ></div>
          <span className="block text-xs text-black-800 mt-2.5">
            {item.brand}
          </span>
          <p className="text-xs text-black-100 mt-1.5 whitespace-pre">
            {item.productName}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default ProductDetail
