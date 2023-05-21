import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import jwt_decode from 'jwt-decode';
import { TUser, TUsersResponse } from '../../models/TUser';

const decodeToken = (response: TUsersResponse): TUser => {
  localStorage.setItem('token', response.token);
  return jwt_decode(response.token);
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/user`,
    prepareHeaders: (headers) => headers.set('Authorization', `Bearere ${localStorage.getItem('token')}`)
  }),
  endpoints: (build) => ({
    registration: build.mutation<TUser, {username: string, password: string}>({
      query: (userData) => ({
        url: '/registration',
        method: 'POST',
        body: userData,
      }),
      transformResponse: decodeToken,
    }),
    login: build.mutation<TUser, {username: string, password: string}>({
      query: (userData) => ({
        url: '/login',
        method: 'POST',
        body: userData,
      }),
      transformResponse: decodeToken,
    }),
    check: build.query<TUser, void>({
      query: () => ({
        url: '/auth',
      }),
      transformResponse: decodeToken,
    }),
  })
})
