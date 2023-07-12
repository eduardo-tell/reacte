import { createSlice } from '@reduxjs/toolkit';

const products = createSlice({
  name: 'cartProducts',
  initialState: [],
  reducers: {
    toggleCartProduct(state, action) {
      if (action.payload) {
        var index = state.map(product => product.id).indexOf(action.payload.id)

        if (index === -1) {
          state.push(action.payload)
        } else {
          state.splice(index, 1)
        }
      }
    }
  }
})

export const { toggleCartProduct } = products.actions
export default products.reducer
