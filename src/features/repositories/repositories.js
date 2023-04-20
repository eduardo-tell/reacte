import { createSlice } from '@reduxjs/toolkit';

const repositories = createSlice({
  name: 'repositories',
  initialState: [],
  reducers: {
    addRepo(state, action) {
      if ( action.payload ) {
        action.payload.forEach((item) => {
          state.push(item)
        })
      }
    }
  }
})

export const { addRepo } = repositories.actions;
export default repositories.reducer;