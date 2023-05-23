import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { TApiResponse, TMovie, TSearchResponse } from '../../models/TMovie'
import { transformFetchedMovie, transformSearchedMovie } from './utils/transformMovie'
import { TFilters } from '../../models/TFilters'
import { getFilterQueryParams } from './utils/getFilterQueryParams'
import { getRandomList } from './utils/getRandomList'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev',
    prepareHeaders: (headers) => headers.set('X-API-KEY', process.env.REACT_APP_KINOPOISK_API_KEY ?? '')
  }),
  endpoints: (build) => ({
    fetchTopTen: build.query<TMovie[], void>({
      query: () => ({
        url: '/v1.3/movie',
        params: {
          page: 1,
          limit: 10
        }
      }),
      transformResponse: (response: TApiResponse): TMovie[] => response.docs.map(transformFetchedMovie),
    }),

    searchByFilters: build.query<TMovie[], TFilters>({
      query: (filters) => ({
        url: `/v1.3/movie?${getFilterQueryParams(filters)}`,
        params: {
          page: 1,
          limit: 100,
        }
      }),
      transformResponse: (response: TApiResponse): TMovie[] => {
        return getRandomList(response.docs).map(transformFetchedMovie);
      },
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
    }),
  })
})
