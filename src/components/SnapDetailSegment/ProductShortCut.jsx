import React from 'react'
import { ReactComponent as Plus } from '/public/assets/plus_icon.svg'

const ProductShortCut = () => {
  return (
    <div
      className="w-full pb-[109%] h-0 bg-cover bg-no-repeat bg-left-top border border-primary relative bg-[length:100%_auto]"
      style={{ backgroundImage: 'url(https://ifh.cc/g/VQLnOD.jpg)' }}
    >
      <Plus className="absolute top-[34.054%] left-[12.797%]" />
      <Plus className="absolute top-[55.054%] left-[33%]" />
      <Plus className="absolute top-[83.054%] left-[32%]" />
    </div>
  )
}

export default ProductShortCut
