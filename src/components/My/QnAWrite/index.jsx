import React, { useState, useMemo } from 'react'
import { types } from '../../../utils/questions'
import Type from './Type'
import Content from './Content'
import AddPicture from './AddPicture'
import { useEffect } from 'react'

const index = () => {
  const [count, setCount] = useState(0)
  const [userValue, setUserValue] = useState({
    type: types[0],
    title: '',
    content: '',
  })
  const [imageFile, setImageFile] = useState(null)

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setUserValue({
      ...userValue,
      [name]: value,
    })
    name === 'content' && setCount(value.length)
  }
  const onChangeCheckedHandler = (idx) => {
    setUserValue({
      ...userValue,
      type: types[idx],
    })
  }

  const showImage = useMemo(() => {
    if (!imageFile && imageFile === null) return

    return (
      <div
        className="w-[86px] h-[86px] bg-cover rounded overflow-hidden "
        style={{
          backgroundImage: `url(${imageFile.thumbnail})`,
        }}
      ></div>
    )
  })

  const uploadThumbnail = (e) => {
    const fileList = e.target.files
    const length = fileList?.length
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0])

      setImageFile({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      })
    }
  }

  useEffect(() => {
    console.log(userValue)
    console.log(imageFile)
  }, [userValue, imageFile])

  return (
    <div className="px-5">
      <Type
        types={types}
        userValue={userValue}
        onChangeCheckedHandler={onChangeCheckedHandler}
      />
      <Content count={count} onChangeHandler={onChangeHandler} />
      <AddPicture uploadThumbnail={uploadThumbnail} showImage={showImage} />
    </div>
  )
}

export default index
