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
        poster: movie.poster.url,
        name: movie.name,
        alternativeName: movie.alternativeName ?? undefined,
        year: movie.year,
        genres: movie.genres.map((genreObj):string => genreObj.name),
        countries: movie.countries.map((genreObj):string => genreObj.name),
      }
    })

    dispatch(movieListSlice.actions.movieListFetchingSuccess(movie))
  } catch (e) {
    const errorMessage = (e instanceof Error) ? e.message : String(e);
    
    dispatch(movieListSlice.actions.movieListFetchingError(errorMessage));
  }
}
