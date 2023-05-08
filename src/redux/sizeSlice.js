import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selectedSize: null
}

const sizeSlice = createSlice({
  name: "size",
  initialState,
  reducers: {
    sizeSelected: (state, action) => {
      state.selectedSize = action.payload
    }
  }
})

export const { sizeSelected } = sizeSlice.actions
export default sizeSlice.reducer

