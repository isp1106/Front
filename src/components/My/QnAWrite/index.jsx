import React, { useState, useMemo, useRef, useEffect } from 'react'
import { types } from '../../../utils/questions'
import Type from './Type'
import Content from './Content'
import AddPicture from './AddPicture'
import QnABtn from './QnABtn'
import Modal from '../../common/Modal'
import CloseIcon from '../../common/CloseIcon'
import useModalControl from '../../../hook/useModalControl'
import { useAddQuestionMutation } from '../../../store/api/questionSlice'

const index = () => {
  const [count, setCount] = useState(0)
  const [userValue, setUserValue] = useState({
    type: types[0],
    title: null,
    content: null,
    answerYn: true,
    password: null,
  })
  const [imageFile, setImageFile] = useState([])
  const [isOpen, ModalControlHandler] = useModalControl()
  const [addQuestion] = useAddQuestionMutation()
  const FileRef = useRef()
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
    console.log(e.target)

    if (imageFile.length > 1) {
      let currentImages = imageFile.slice(1, 2)
      currentImages.push(URL.createObjectURL(fileList[fileList.length - 1]))
      setImageFile(currentImages)
    } else {
      setImageFile([
        ...imageFile,
        URL.createObjectURL(fileList[fileList.length - 1]),
      ])
    }
  }
  const AddQuestionHandler = () => {
    if (!userValue.title || !userValue.content) {
      ModalControlHandler()
    }
    const fileList = FileRef.current.files
    let formData = new FormData() // formData 객체를 생성한다.
    for (let i = 0; i < fileList.length; i++) {
      formData.append('images', fileList[i]) // 반복문을 활용하여 파일들을 formData 객체에 추가한다
    }
    formData.append('type', userValue.type)
    formData.append('title', userValue.title)
    formData.append('content', userValue.content)
    formData.append('privateYn', userValue.privateYn)
    formData.append('password', userValue.password)
    console.log(formData.append)
    //api호출 로직 짜기
  }

  const removeThumbnail = (idx) => {
    idx === 1 ? setImageFile(imageFile.splice(idx, 1)) : setImageFile([])
    console.log('실행!')
  }

  const showImage = useMemo(() => {
    return (
      <>
        {imageFile?.map((item, idx) => (
          <div className="relative flex gap-2">
            <div
              className="relative w-[86px] h-[86px] bg-cover rounded overflow-hidden shawdow-md"
              style={{
                backgroundImage: `url(${imageFile[idx]})`,
              }}
              onClick={() => removeThumbnail(idx)}
            ></div>
            <div className="absolute -right-2 -top-2">
              <CloseIcon
                fill="#000"
                size="8"
                className="bg-black-200 p-1 rounded-full"
              />
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
        <AddPicture
          uploadThumbnail={uploadThumbnail}
          showImage={showImage}
          ref={FileRef}
          count={imageFile.length === 0 ? 0 : imageFile.length}
        />
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
