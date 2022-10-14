import React from 'react'
import HaveResult from './HaveResult'
import NoResult from './NoResult'
import product from '~/dummy/dummy/product.json'

function AfterSearch() {
  return (
    <div className="mt-7">
      {product && product.length !== 0 ? (
        <HaveResult product={product} />
      ) : (
        <NoResult />
      )}
    </div>
  )
}

export default AfterSearch
