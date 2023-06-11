import { createSlice } from '@reduxjs/toolkit';

const products = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct(state, action) {
      if (action.payload) {

        action.payload.products.forEach((item) => {
          var index = state.map(itemOfState => itemOfState.id).indexOf(item.id)

          if (index === -1) {
            state.push(item)
          }
        })
      }
    }
  }
})

export const { addProduct } = products.actions;
export default products.reducer;