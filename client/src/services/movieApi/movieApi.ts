import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { TApiResponse, TMovie, TSearchResponse } from '../../models/TMovie'
import { transformFetchedMovie, transformSearchedMovie } from './utils/transformMovie'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev',
    prepareHeaders: (headers) => headers.set('X-API-KEY', 'TYRTRAQ-YJZ41V1-M1A1C7P-BK58JAB')
  }),
  endpoints: (build) => ({
    fetchTopTen: build.query<TMovie[], string>({
      query: () => ({
        url: '/v1.3/movie',
        params: {
          page: 1,
          limit: 10
        }
      }),
      transformResponse: (response: TApiResponse): TMovie[] => response.docs.map(transformFetchedMovie),
    }),
    searchByName: build.query<TMovie[], string>({
      query: (serchTerm) => ({
        url: '/v1.2/movie/search',
        params: {
          page: 1,
          limit: 10,
          query: serchTerm
        }
      }),
      transformResponse: (response: TSearchResponse): TMovie[] => response.docs.map(transformSearchedMovie),

    }),
    fetchById: build.query<TMovie, number>({
      query: (id) => ({
        url: `/v1.3/movie/${id}`,
      }),
      transformResponse: transformFetchedMovie,
    })
  })
})
