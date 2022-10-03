import React, { useState } from 'react'
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
    thumbnailBase64: '',
  })
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

  const selectThumbnail = (e) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(e.target.files[0])
    fileReader.addEventListener('load', () => {
      console.log(fileReader.result)
    })
  }

  useEffect(() => {
    console.log(userValue)
  }, [userValue])

  return (
    <div className="px-5">
      <Type
        types={types}
        userValue={userValue}
        onChangeCheckedHandler={onChangeCheckedHandler}
      />
      <Content count={count} onChangeHandler={onChangeHandler} />
      <AddPicture selectThumbnail={selectThumbnail} />
    </div>
  )
}

export default index
