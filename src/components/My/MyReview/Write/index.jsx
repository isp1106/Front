import React, { useEffect, useState, useRef } from 'react'
import { reviewContent } from '../../../../dummy/review'
import StarScore from './StarScore'
import Content from './Content'
import AddPicture from './AddPicture'
import Button from '../../../common/Button'
import { useAddProductReviewMutation } from '../../../../store/api/reviewApiSlice'
import { useLocation } from 'react-router-dom'
const index = () => {
  const [count, setCount] = useState(0)
  const [userValue, setUserValue] = useState({
    title: null,
    images: [],
    id: null,
    content: null,
    product: null,
    member: null,
    star: 0,
    createdDate: null,
  })
  const [imageFile, setImageFile] = useState([])
  const [addProductReview] = useAddProductReviewMutation()
  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setUserValue({
      ...userValue,
      [name]: value,
    })
    name === 'content' && setCount(value.length)
  }
  const uploadedImage = useRef(null)
  const imageUploader = useRef(null)
  const location = useLocation()
  const edit = location.state
  console.log(edit)
  // const handleImageUpload = (e) => {
  //   const [file] = e.target.files
  //   if (file) {
  //     const reader = new FileReader()
  //     const { current } = uploadedImage
  //     current.file = file
  //     reader.onload = (e) => {
  //       current.src = e.target.result
  //     }
  //     reader.readAsDataURL(file)
  //   }
  // }
  const handleImageUpload = (e) => {
    const fileList = e.target.files

    // console.log(imageFile.length)
    if (imageFile.length > 1) {
      let currentImages = imageFile.slice(1, 2)
      setImageFile([
        ...currentImages,
        URL.createObjectURL(fileList[fileList.length - 1]),
      ])
      let currentFiles = userValue.images.slice(1, 2)
      setUserValue({
        ...userValue,
        images: [...currentFiles, fileList[fileList.length - 1]],
      })
    } else {
      setImageFile([
        ...imageFile,
        URL.createObjectURL(fileList[fileList.length - 1]),
      ])
      setUserValue({
        ...userValue,
        images: [...userValue.images, fileList[fileList.length - 1]],
      })
    }
  }

  const AddReviewHandler = () => {
    const formData = new FormData()

    for (const key in userValue) {
      if (Array.isArray(userValue[key])) {
        formData.append(key, userValue[key])
      } else {
        formData.append(key, userValue[key])
      }
    }

    // formData.append(
    //   'title',
    //   new Blob([JSON.stringify(userValue.title)], {
    //     type: 'application/json',
    //   }),
    // )
    // formData.append(
    //   'id',
    //   new Blob([JSON.stringify(userValue.id)], {
    //     type: 'application/json',
    //   }),
    // )
    // formData.append(
    //   'content',
    //   new Blob([JSON.stringify(userValue.content)], {
    //     type: 'application/json',
    //   }),
    // )
    // formData.append(
    //   'product',
    //   new Blob([JSON.stringify(userValue.product)], {
    //     type: 'application/json',
    //   }),
    // )
    // formData.append(
    //   'member',
    //   new Blob([JSON.stringify(userValue.member)], {
    //     type: 'application/json',
    //   }),
    // )
    // formData.append(
    //   'star',
    //   new Blob([JSON.stringify(userValue.star)], {
    //     type: 'application/json',
    //   }),
    // )
    // formData.append(
    //   'createdDate',
    //   new Blob([JSON.stringify(userValue.createdDate)], {
    //     type: 'application/json',
    //   }),
    // )
    // formData.append(
    //   'images',
    //   new Blob([JSON.stringify(userValue.images)], {
    //     type: 'multipart/form-data',
    //   }),
    // )
    addProductReview(formData)
  }

  useEffect(() => {
    // console.log(userValue)
  }, [userValue, edit])

  const reviewData = reviewContent
  return (
    <div className="px-5 mt-[38px]">
      <ul>
        {reviewData.map((review, index) => (
          <li
            className="flex items-center pb-5 border-b border-black-200"
            key={index}
          >
            <div
              className="w-[4.125rem] h-[4.125rem] bg-no-repeat bg-[length:100%_auto] rounded overflow-hidden mr-3"
              style={{
                backgroundImage: `url(${
                  edit ? edit.img_url : review.brand_img_url
                })`,
              }}
            ></div>
            <ul className="grow">
              <li className="text-xs flex flex-col justify-center gap-2">
                <p className="font-bold">{edit ? edit.brand : review.brand}</p>
                <p>{edit ? edit.name : review.product_name}</p>
                <p className="text-black-600">
                  옵션: {edit ? edit.option : review.product_option}
                </p>
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center justify-center py-[1.875rem] mb-[1.875rem] border-b border-black-200 gap-4">
        <p>상품에 대한 별점을 매겨주세요</p>
        <StarScore
          userValue={userValue}
          setUserValue={setUserValue}
          edit={edit}
        />
      </div>
      <AddPicture
        handleImageUpload={handleImageUpload}
        uploadedImage={uploadedImage}
        imageUploader={imageUploader}
      />
      <Content count={count} onChangeHandler={onChangeHandler} edit={edit} />
      <Button
        classprop="text-sm mt-9 mb-5 bg-primary text-white"
        onClick={
          edit
            ? null //  AddUpdateHandler
            : AddReviewHandler
        }
      >
        {edit ? '수정하기' : '등록하기'}
      </Button>
    </div>
  )
}

export default index
