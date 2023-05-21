import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { TApiResponse, TMovie, TSearchResponse } from '../../models/TMovie'

const formatMovie = (response: TApiResponse): TMovie[] => {
  return response.docs.map((movie):TMovie => ({
      ...movie,
      poster: movie.poster.url,
      alternativeName: movie.alternativeName ?? undefined,
      genres: movie.genres.map((genreObj):string => genreObj.name),
      countries: movie.countries.map((genreObj):string => genreObj.name),
      rating: movie.rating.kp.toFixed(1),
      movieLength: movie.movieLength 
        ? `${Math.floor(movie.movieLength / 60)}:${movie.movieLength % 60}`
        : '-',
      watchability: movie.watchability.items ?? []
    }))
}

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev',
    prepareHeaders: (headers) => headers.set('X-API-KEY', 'TF84ZJY-8P8M89V-HHCYX6V-7YD3VMF')
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
      transformResponse: formatMovie,
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
      transformResponse: (response: TSearchResponse): TMovie[] => {
        return response.docs.map((movie):TMovie => ({
            ...movie,
            alternativeName: movie.alternativeName ?? undefined,
            rating: movie.rating.toFixed(1),
            movieLength: movie.movieLength 
              ? `${Math.floor(movie.movieLength / 60)}:${movie.movieLength % 60}`
              : '-',
            watchability: []
          })
        )
      },
    })
  })
})
