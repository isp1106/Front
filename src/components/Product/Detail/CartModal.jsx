import React from 'react'

const CartModal = () => {
  return (
    <aside className="pointer-events-none fixed inset-x-0 flex bottom-0 max-w-full pt-10">
      {/* 장바구니의 가시성은 아래 div의 (id="shopping-cart") class명으로 제어합니다. 
      translate-x-full: 장바구니 닫힘 translate-x-0: 장바구니 열림 */}
      <section
        className="pointer-events-auto w-screen   transition ease-in-out duration-500 translate-y-full translate-y-0"
        id="shopping-cart"
      >
        <div className="flex w-full flex-col overflow-y-scroll bg-white shadow-xl">
          <div className="border-t border-gray-200 p-6">
            <div className="flex justify-between font-medium">
              <p>결제금액</p>
              <p className="font-bold" id="total-count">
                0원
              </p>
            </div>
            <a
              id="payment-btn"
              href="./"
              className="flex items-center justify-center rounded-md border border-transparent bg-sky-400 px-6 py-3 mt-6 font-medium text-white shadow-sm hover:bg-sky-500"
            >
              결제하기
            </a>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                또는
                <button
                  type="button"
                  className="font-medium text-sky-400 hover:text-sky-500"
                >
                  쇼핑 계속하기
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </aside>
  )
}

export default CartModal
