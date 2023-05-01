import { configureStore } from "@reduxjs/toolkit"
import repositoriesReducer from "./features/repositories/repositories"
import favoritesReducer from "./features/favorites/favorites"

const localStorageMiddleware = store => next => action => {
  const result = next(action)
  localStorage.setItem('myReduxState', JSON.stringify(store.getState()))
  return result
}

const persistedState = localStorage.getItem('myReduxState') ? JSON.parse(localStorage.getItem('myReduxState')) : {}

const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
    favorites: favoritesReducer
  },  
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState: persistedState,
})

export default store