import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { TCollection, TCollectionsResponse } from '../../models/TCollection'

export const collectionApi = createApi({
  reducerPath: 'collectionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/list`,
    prepareHeaders: (headers) => headers.set('Authorization', `Bearere ${localStorage.getItem('token')}`)
  }),
  endpoints: (build) => ({
    fetchTeamCollections: build.query<TCollection[], void>({
      query: () => ({
        url: '/team',
        params: {
          page: 1,
          limit: 10
        }
      }),
      transformResponse: ((response: TCollectionsResponse): TCollection[] => response.rows),
    }),
    fetchUserCollectios: build.query<TCollection[], void>({
      query: (id) => ({
        url: '/',
        params: {
          page: 1,
          limit: 10,
        }
      }),
      transformResponse: ((response: TCollectionsResponse): TCollection[] => response.rows),
    }),
    create: build.mutation<TCollection, {title: string, description: string, items: number[]}>({
      query: (collectionData) => ({
        url: '/',
        method: 'POST',
        body: collectionData,
      }),
    }),
    delete: build.mutation<{id: number}, number>({
      query: (id) => ({
        url: '/',
        method: 'DELETE',
        body: { id: id },
      }),
    }),
  })
})
