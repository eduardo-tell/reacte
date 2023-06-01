import { createSlice } from '@reduxjs/toolkit';

const products = createSlice({
  name: 'mainData',
  initialState: [],
  reducers: {
    addProduct(state, action) {
      if (action.payload) {
        action.payload.products.forEach((item) => {
          state.push(item)
        })
      }
    }
  }
})

export const { addProduct } = products.actions;
export default products.reducer;