import { FC } from 'react';

import styles from './MovieList.module.css'

import MovieListItem from '../MovieListItem/MovieListItem';
import { useAppSelector } from '../../hooks/redux';

const MovieList: FC = () => {

  const {movieList} = useAppSelector(state => state.movieListReducer)

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
