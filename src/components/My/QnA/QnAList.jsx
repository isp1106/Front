import React from 'react'
import ContentBox from './ContentBox'
import Modal from '../../common/Modal'
import useModalControl from '../../../hook/useModalControl'

const QnAList = ({ questions }) => {
  const [isOpen, ModalControlHandler] = useModalControl()

  return (
    <>
      {questions.map((item) => (
        <ContentBox
          item={item}
          key={item.id}
          ModalControlHandler={ModalControlHandler}
        />
      ))}
      {isOpen && (
        <Modal isOpen={isOpen}>
          <div className="flex flex-col items-center gap-5">
            <h3 className="w-full px-5 text-center">
              작성자만 볼 수 있습니다.
            </h3>
            <div
              className="border border-black-200 px-3 py-1 rounded"
              onClick={ModalControlHandler}
            >
              확인
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default QnAList
