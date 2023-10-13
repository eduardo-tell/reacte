import { createSlice } from '@reduxjs/toolkit';

const favorites = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorite(state, action) {
      if (action.payload) {
        var index = state.map(favorite => favorite.id).indexOf(action.payload.id)

        action.payload.isFavorited = true

        console.log(action.payload.isFavorited);

        if (index === -1) {
        //   action.payload.isFavorited = 1
          state.push(action.payload)
        } else {
        //   action.payload.isFavorited = 0
          state.splice(index, 1)
        }
      }
    }
  }
})

export const { toggleFavorite } = favorites.actions
export default favorites.reducer
