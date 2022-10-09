import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 1,
  selectedOption: 'FF',
}

export const productSlice = createSlice({
  name: 'proudct',
  initialState,
  reducers: {
    chnageCount(state, action) {
      state.count = state.count + action.payload * 1
    },
    setSecletedOption(state, action) {
      state.selectedOption = action.payload
    },
  },
})

export const { chnageCount, setSecletedOption } = productSlice.actions

export default productSlice.reducer
