import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { movieApi } from './movieApi/movieApi';
import movieListReducer from './redusers/MovieListSlice'

const rootReducer = combineReducers({
  movieListReducer,
  [movieApi.reducerPath]: movieApi.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(movieApi.middleware)
    }
  })
} 

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']
