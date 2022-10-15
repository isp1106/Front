import { useMemo } from 'react'
import { detailProducts } from '../../../dummy/detail'

const Relation = () => {
  const { thumbnail, title } = detailProducts.magazine
  return (
    <div className="px-5">
      <h4 className="font-bold my-4">이 상품이 포함된 매거진</h4>
      <div>
        <img src={thumbnail} width="150" />
      </div>
      <p className="text-xs mt-2">{title}</p>
    </div>
  )
}

export default Relation
