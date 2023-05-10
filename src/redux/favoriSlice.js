import { createSlice } from '@reduxjs/toolkit';

const favoriSlice = createSlice({
  name: 'favori',
  initialState: {
favoriItems: [],
  },
  reducers: {
    addProductToFavori : (state, action) => {
      state.favoriItems.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.favoriItems = state.favoriItems.filter(item => item.id !== action.payload);
    },
  },
});

export const { addProductToFavori , deleteProduct } = favoriSlice.actions;

export default favoriSlice.reducer;

  


