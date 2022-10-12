import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 1,
  selectedOption: 'FF',
}

export const productSlice = createSlice({
  name: 'proudct',
  initialState,
  reducers: {
    changeCount(state, action) {
      state.count = state.count + action.payload * 1
    },
    setSecletedOption(state, action) {
      state.selectedOption = action.payload
    },
  },
})

export const { changeCount, setSecletedOption } = productSlice.actions

export default productSlice.reducer
