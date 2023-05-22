import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { TCollection, TCollectionsResponse } from '../../models/TCollection'

export const collectionApi = createApi({
  reducerPath: 'collectionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => headers.set('Authorization', `Bearere ${localStorage.getItem('token')}`)
  }),
  endpoints: (build) => ({
    fetchTeamCollections: build.query<TCollection[], void>({
      query: () => ({
        url: '/list/team',
        params: {
          page: 1,
          limit: 10
        }
      }),
      transformResponse: ((response: TCollectionsResponse): TCollection[] => response.rows),
    }),
    fetchUserCollectios: build.query<TCollection[], void>({
      query: () => ({
        url: '/list/',
        params: {
          page: 1,
          limit: 10
        }
      }),
      transformResponse: ((response: TCollectionsResponse): TCollection[] => response.rows),
    })
  })
})
