import { TFetchedMovie, TMovie, TSearchedMovie } from "../../../models/TMovie";

export const transformFetchedMovie = (movie: TFetchedMovie):TMovie => ({
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
});

export const transformSearchedMovie = (movie: TSearchedMovie):TMovie => ({
  ...movie,
  alternativeName: movie.alternativeName ?? undefined,
  rating: movie.rating.toFixed(1),
  movieLength: movie.movieLength 
    ? `${Math.floor(movie.movieLength / 60)}:${movie.movieLength % 60}`
    : '-',
  watchability: []
})
