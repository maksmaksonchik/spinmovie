import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { movieApi } from './movieApi/movieApi';
import { userApi } from './userApi/userApi';

const rootReducer = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
  [userApi.reducerPath]: userApi.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(movieApi.middleware).concat(userApi.middleware)
    }
  })
} 

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']
