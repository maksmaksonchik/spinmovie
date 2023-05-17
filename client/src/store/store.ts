import {combineReducers, configureStore } from '@reduxjs/toolkit';
// import { kinopoiskApi } from './kinopoisk/kinopoisk.api';
import movieListReducer from './redusers/MovieListSlice'

const rootReducer = combineReducers({
  movieListReducer
  // [kinopoiskApi.reducerPath]: kinopoiskApi.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
} 

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']
