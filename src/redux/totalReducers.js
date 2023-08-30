// totalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    total: 0,
    productTotals: {},
  };
  
  const totalSlice = createSlice({
    name: 'total',
    initialState,
    reducers: {
      setTotal: (state, action) => {
        const { productId, total } = action.payload;
        state.productTotals[productId] = total;
      },
    },
  });
  
  export const { setTotal } = totalSlice.actions;
  
  export default totalSlice.reducer;
  