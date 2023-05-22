import axios from 'axios';
import { TMovie } from '../../models/TMovie';

const emptyMovie: TMovie = {
  id: 0,
  name: '',
  poster: '',
  year: 2000,
  countries: [],
  genres: [],
  movieLength: '',
  rating: '1',
  watchability: [],
}

export const getMovieById = async (id: number): Promise<TMovie> => {
  try {
    const {data} = await axios.get<TMovie>(
      `https://api.kinopoisk.dev/v1.3/movie/${id}`,
      {
        headers: {
          accept: 'application/json',
          'X-API-KEY': 'TYRTRAQ-YJZ41V1-M1A1C7P-BK58JAB'
        },
      },
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
    } else {
      console.log('An unexpected error occurred');
    }
    return emptyMovie;
  }
}
