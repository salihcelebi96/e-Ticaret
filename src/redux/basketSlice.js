import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basketItems: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.basketItems.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.basketItems = state.basketItems.filter(item => item.id !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct } = basketSlice.actions;

export default basketSlice.reducer;

  


