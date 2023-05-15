import data from '../mocks/moviesResponse.json';
import { TMovie } from '../types';

const promiseResponse = (data: any): Promise<any[]> =>
	new Promise(resolve => {
		setTimeout(() => {
			resolve(data);
		}, 500);
	});

const moviesResponse = data.docs;

export const getMovieList = (): Promise<TMovie[]> => {
  const movie = moviesResponse.map((movie):TMovie => {
    return {
      poster: movie.poster.url,
      name: movie.name,
      alternativeName: movie.alternativeName ?? undefined,
      year: movie.year,
      genres: movie.genres.map((genreObj):string => genreObj.name),
      countries: movie.countries.map((genreObj):string => genreObj.name),
    }
  })

  return promiseResponse(movie);
};
