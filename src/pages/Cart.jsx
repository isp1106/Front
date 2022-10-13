import React from 'react'
import CartList from '../components/Cart'
// import { useGetCartItemsQuery } from '../../store/api/cartApiSlice'
// import ErrorCom from '../components/common/ErrorCom'
// import Loading from '../components/layout/Loading'
import { cartItems as data } from '../dummy/cart'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Cart = () => {
  const token = localStorage.getItem('accessToken')
  const cartItems = useSelector((state) => state.cart)
  // const { data, isLoading, isError, isSuccess } = useGetCartItemsQuery()

  return (
    <>
      {token ? (
        <CartList cartItems={data} />
      ) : (
        <CartList cartItems={cartItems} />
      )}
    </>
  )
}

export default Cart
