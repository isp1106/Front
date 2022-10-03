import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { magazineDummy as list } from '../../dummy/magaineDetail'
import Brand from './Brand'
import Plus from './Plus'
import { useGetMagazineQuery } from '../../store/api/magazineSlice'

const TopMain = () => {
  // const { title, thumbnail, items } = list
  const params = useParams()
  console.log(params.id)
  console.log(useGetMagazineQuery(params.id))
  const navigate = useNavigate()
  const { data: list, isLoading, isError } = useGetMagazineQuery(params.id)
  const onClickHandler = (id) => {
    navigate(`/product/${id}`)
  }
  return (
    <>
      {isLoading ? (
        <span>로딩중...</span>
      ) : isError ? (
        <span>에러발생</span>
      ) : (
        list && (
          <>
            <div className="h-[76px] bg-point text-white font-bold flex items-center justify-center">
              {list.title}
            </div>
            <div className="relative">
              {list.thumbnail.map((item, idx) => (
                <React.Fragment key={idx}>
                  <img src={item} className="w-full" />
                  {idx === 0 && <Brand />}
                </React.Fragment>
              ))}
              {list.items.map((item, idx) => (
                <Plus
                  className={`absolute ${item.className}`}
                  id={item.id}
                  key={idx}
                />
              ))}
            </div>
          </>
        )
      )}
    </>
  )
}

export default TopMain
