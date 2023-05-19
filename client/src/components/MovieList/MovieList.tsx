import { FC } from 'react';

import styles from './MovieList.module.css'

import MovieListItem from '../MovieListItem/MovieListItem';
import { TMovie } from '../../models/TMovie';

type Props = {
  movieList: TMovie[];
  type: 'wheelList' | 'searchList'
  replaceAction?: (movie: TMovie) => void;
}

const MovieList: FC<Props> = ({ movieList, type, replaceAction }) => {
  return (
    <div className={styles.movieList}>
      {movieList && movieList.map((movie, i) => (
        <MovieListItem
          movie={movie}
          index={i}
          type={type}
          replaceAction={replaceAction}
          key={i}
        />
      ))}
    </div>
  );
}

export default MovieList;
