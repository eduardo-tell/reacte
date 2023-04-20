import { configureStore } from "@reduxjs/toolkit"
import repositoriesReducer from "./features/repositories/repositories"
import favoritesReducer from "./features/favorites/favorites"

const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
    favorites: favoritesReducer
  }
})

export default store