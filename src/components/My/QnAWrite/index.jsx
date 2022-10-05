import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { types } from '../../../utils/questions'
import Type from './Type'
import Content from './Content'
import AddPicture from './AddPicture'
import QnABtn from './QnABtn'
import Modal from '../../common/Modal'
import CloseIcon from '../../common/CloseIcon'
import useModalControl from '../../../hook/useModalControl'

const index = () => {
  const [count, setCount] = useState(0)
  const [userValue, setUserValue] = useState({
    type: types[0],
    title: null,
    content: null,
  })
  const [imageFile, setImageFile] = useState([])
  const [serverFile, setServerFile] = useState([])
  const [isOpen, ModalControlHandler] = useModalControl()

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

  const uploadThumbnail = (e) => {
    const fileList = e.target.files
    //다영이 =>

    if (imageFile.length > 1) {
      let currentImages = imageFile.slice(1, 2)
      currentImages.push(URL.createObjectURL(fileList[fileList.length - 1]))
      setImageFile(currentImages)

      let currentServerImages = serverFile.slice(1, 2)
      currentServerImages.push(
        URL.createObjectURL(fileList[fileList.length - 1]),
      )
      setServerFile(currentServerImages)
    } else {
      setImageFile([
        ...imageFile,
        URL.createObjectURL(fileList[fileList.length - 1]),
      ])
      setServerFile([...serverFile, fileList[fileList.length - 1]])
    }
  }
  const AddQuestionHandler = () => {
    if (!userValue.title || !userValue.content) {
      ModalControlHandler()
    }

    let formData = new formData()
    formData.append('text', userValue)
    formData.append('file', imageFile)
    new Blob([JSON.stringify(userValue)], {
      type: 'multipart/formdata',
    }),
      console.log(formData)
  }

  const removeThumbnail = (idx) => {
    const currentImages = imageFile.splice(idx, 1)
    setImageFile(currentImages)
  }

  const showImage = useMemo(() => {
    return (
      <>
        {imageFile?.map((item, idx) => (
          <div
            className="relative w-[86px] h-[86px] bg-cover rounded overflow-hidden"
            style={{
              backgroundImage: `url(${imageFile[idx]})`,
            }}
            onClick={removeThumbnail}
          >
            <div className="absolute right-1 top-1">
              <CloseIcon size="15" />
            </div>
          </div>
        ))}
      </>
    )
  })

  useEffect(() => {
    console.log('imageFile', imageFile)
  }, [imageFile])

  return (
    <>
      <div className="px-5">
        <Type
          types={types}
          userValue={userValue}
          onChangeCheckedHandler={onChangeCheckedHandler}
        />
        <Content count={count} onChangeHandler={onChangeHandler} />
        <AddPicture uploadThumbnail={uploadThumbnail} showImage={showImage} />
        <QnABtn onClick={AddQuestionHandler} />
      </div>
      {isOpen && (
        <Modal
          onClick={ModalControlHandler}
          title="제목과 내용은 필수로 입력해야합니다."
        />
      )}
    </>
  )
}

export default index
