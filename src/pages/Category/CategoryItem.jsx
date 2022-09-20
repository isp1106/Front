import React from 'react'

const CategoryItem = ({ item }) => {
  return (
    <div className="w-16 py-2">
      <img
        src={item.imgSrc}
        alt={item.subCategoryName}
        className="h-16 w-full rounded-2xl flex justify-center items-center  bg-white"
      />
      <h5 className="text-center w-full">{item.subCategoryName}</h5>
    </div>
  )
}

export default CategoryItem
