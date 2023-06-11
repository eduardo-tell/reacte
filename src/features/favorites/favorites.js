import { createSlice } from '@reduxjs/toolkit';

const favorites = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorite : (state, action) => {
      var index = state.favorites.map(favorite => favorite.id).indexOf(action.payload.id)

      if (index === -1) {
        state.favorites.push(action.payload)
      } else {
        state.favorites.splice(index, 1)
      }
    }
  }
})

export const { toggleFavorite } = favorites.actions
export default favorites.reducer
