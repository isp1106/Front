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
        <Modal onClick={ModalControlHandler} title="작성자만 볼 수 있습니다." />
      )}
    </>
  )
}

export default QnAList
