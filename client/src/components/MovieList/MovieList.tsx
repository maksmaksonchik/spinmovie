import { FC, useEffect, useState } from 'react';

import styles from './MovieList.module.css'
import { getMovieList } from '../../services/requestMock';
import { TMovie } from '../../types';
import MovieListItem from '../MovieListItem/MovieListItem';

const MovieList: FC = () => {
  const [movieList, setMovieList] = useState([] as TMovie[]);

  const fetchMovieList = async () => {
    const movieList = await getMovieList();

    setMovieList(movieList);
  }

  useEffect(() => { fetchMovieList() }, []);

  return (
    <div className={styles.movieList}>
      {movieList.map((movie, i) => (
        <MovieListItem
          movie={movie}
          key={i} />
      ))}
    </div>
  );
}

export default MovieList;
