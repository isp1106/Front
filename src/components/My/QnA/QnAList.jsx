import React, { useState, useRef } from 'react'
import ContentBox from './ContentBox'
import Modal from '../../common/Modal'
import useOutSideHook from '../../../hook/useOutSideHook'

const QnAList = ({ questions }) => {
  const [modalFalg, setModalFalg] = useState(false)
  const modalRef = useRef(null)
  useOutSideHook(modalRef, () => {
    setModalFalg(false)
  })
  return (
    <>
      {questions.length === 0 && (
        <>
          <div className="w-full text-center pt-5 mt-5">
            문의 내역이 없습니다
          </div>
        </>
      )}
      {questions.map((item) => (
        <ContentBox
          id="test"
          item={item}
          key={item.id}
          ModalControlHandler={() => setModalFalg(true)}
        />
      ))}
      {modalFalg && (
        <div ref={modalRef}>
          <Modal
            onClick={() => setModalFalg(false)}
            title="작성자만 볼 수 있습니다."
          />
        </div>
      )}
    </>
  )
}

export default QnAList
