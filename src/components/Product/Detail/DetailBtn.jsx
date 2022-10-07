import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cls } from '../../../utils'
import HeartIcon from '../../common/HeartIcon'
import { ReactComponent as LinkIcon } from '/public/assets/link.svg'
import ModalContent from './ModalContent'
import ProductCard from './ProductCard'

const NextBtn = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [buyProduct, setBuyProduct] = useState(false)
  const [count, setCount] = useState(0)
  const ModalOpenHandler = () => {
    setIsOpen((prev) => !prev)
  }
  const GoToCart = () => {
    setBuyProduct((prev) => !prev)
  }

  const onClickHandler = () => {
    isOpen ? GoToCart() : ModalOpenHandler()
  }
  const chnageCount = (frag) => {
    setCount(count + frag * 1)
  }
  const goToShoppingCart = () => {
    navigate('/cart')
  }
  const buyNow = () => {
    //구매 api
    //결제 페이지로 이동
  }

  const copyUrl = () => {
    const value = window.document.location.href
    navigator.clipboard.writeText(value).then(() => {
      alert('주소가 복사되었습니다')
    })
  }

  const ContinueShopping = () => {
    setBuyProduct(false)
    setIsOpen(false)
  }

  return (
    <>
      {isOpen && (
        <div
          className="bg-gray-900 bg-opacity-50 fixed inset-0 z-30"
          onClick={ModalOpenHandler}
        ></div>
      )}
      <aside className="fixed inset-x-0 flex bottom-0  z-50">
        <section
          className={`'pointer-events-auto w-screen transition ease-in-out duration-500 translate-y-${
            isOpen ? 0 : 'full'
          }`}
        >
          <div className="flex w-full flex-col overflow-y-scroll bg-white shadow-xl pb-[78px] rounded-md">
            {isOpen && !buyProduct && (
              <ModalContent count={count} chnageCount={chnageCount} />
            )}
            {buyProduct && <ProductCard />}
          </div>
        </section>
      </aside>
      <div className="hover:cursor-pointer fixed bottom-0 left-0 right-0 z-50">
        <div
          className={cls(
            'h-[80px] gap-4 w-full flex flex-col justify-center items-center text-white-200 bg-point pb-4',
          )}
        >
          {buyProduct ? (
            <div className="flex items-center justify-between">
              <div className="text-xl " onClick={ContinueShopping}>
                쇼핑계속하기
              </div>
              <div className="mx-5 grow w-[1px] h-[12px] bg-black-200"></div>
              <div className="text-xl" onClick={goToShoppingCart}>
                장바구니가기
              </div>
            </div>
          ) : (
            <>
              <div className="flex w-full px-5 items-center">
                <div className="flex gap-5 flex-grow">
                  <HeartIcon size="24" fill="#ffffff" />
                  <LinkIcon width="24" height="24" onClick={copyUrl} />
                </div>
                <div className="flex gap-3 items-center pl-5">
                  <span className="text-[20px]" onClick={onClickHandler}>
                    장바구니
                  </span>
                  <div className="w-[1px] h-[12px] bg-black-200"></div>
                  <span
                    className="flex flex-end text-[20px]"
                    onClick={() => navigate('/order')}
                  >
                    구매하기
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default NextBtn