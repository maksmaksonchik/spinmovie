import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { movieApi } from '../services/movieApi/movieApi';
import { collectionApi } from '../services/collectionApi/collectionsApi';
import { userApi } from '../services/userApi/userApi';
import { userReducer } from './slices/userSlice';
import { collectionReducer } from './slices/collectionSlice';


const rootReducer = combineReducers({
  userReducer,
  collectionReducer,
  [movieApi.reducerPath]: movieApi.reducer,
  [collectionApi.reducerPath]: collectionApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
      movieApi.middleware, 
      collectionApi.middleware,
      userApi.middleware
    )
  })
} 

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']
