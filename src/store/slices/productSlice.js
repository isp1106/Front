import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  product: '',
  count: '',
  discountPrice: '',
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct(state, action) {
      state = action.payload
    },
  },
})

export const { setProduct } = productSlice.actions

export default productSlice.reducer
