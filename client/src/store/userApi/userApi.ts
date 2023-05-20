import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { TCollection, TCollectionsResponse } from '../../models/TCollection'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => headers.set('Authorization', `Bearere ${localStorage.getItem('token')}`)
  }),
  endpoints: (build) => ({
    fetchTeamCollections: build.query<TCollection[], string>({
      query: () => ({
        url: '/list',
        params: {
          page: 1,
          limit: 10
        }
      }),
      transformResponse: ((response: TCollectionsResponse): TCollection[] => response.rows),
    })
  })
})
