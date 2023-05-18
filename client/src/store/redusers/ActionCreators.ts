import axios from "axios";
import { AppDispatch } from "../store";
import { TApiResponse, TMovie } from "../../models/TMovie";
import { movieListSlice } from "./MovieListSlice";


export const fetchMovieList = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(movieListSlice.actions.movieListFetching())

    const response = await axios.get<TApiResponse>('movieData.json');

    const movie = response.data.docs.map((movie):TMovie => {
      return {
        id: movie.id,
        poster: movie.poster.url,
        name: movie.name,
        alternativeName: movie.alternativeName ?? undefined,
        year: movie.year,
        genres: movie.genres.map((genreObj):string => genreObj.name),
        countries: movie.countries.map((genreObj):string => genreObj.name),
        rating: movie.rating.kp.toFixed(1),
        movieLength: `${Math.floor(movie.movieLength / 60)}:${movie.movieLength % 60}`,
        watchability: movie.watchability.items ?? []
      }
    })

    dispatch(movieListSlice.actions.movieListFetchingSuccess(movie))
  } catch (e) {
    const errorMessage = (e instanceof Error) ? e.message : String(e);
    
    dispatch(movieListSlice.actions.movieListFetchingError(errorMessage));
  }
}
