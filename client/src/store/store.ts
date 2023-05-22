import { configureStore} from '@reduxjs/toolkit';
import { movieApi } from '../services/movieApi/movieApi';
import { collectionApi } from '../services/collectionApi/collectionsApi';
import { userApi } from '../services/userApi/userApi';
import { userReducer } from './userSlice/userSlice';
import { collectionReducer } from './slices/collectionSlice';
import { movieReducer } from './movieSlice/movieSlice';

export const store = configureStore({
  reducer: {
    movieReducer,
    userReducer,
    collectionReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [collectionApi.reducerPath]: collectionApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    movieApi.middleware, 
    collectionApi.middleware,
    userApi.middleware
  )
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
