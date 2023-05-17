import { FC } from 'react';

import { TMovie } from '../../models/TMovie';
import styles from './MovieListItem.module.css';

type Props = {
  movie: TMovie;
}

const MovieListItem: FC<Props> = ({ movie }) => {
  return (
    <div className={styles.movie}>
      <img
        className={styles.poster}
        src={movie.poster}
        alt="Movie poster" />
      <div className={styles.info}>
        <div className={styles.header}>
          <h2 className={styles.name}>{movie.name}</h2>
          <div className={styles.altName}>{movie.alternativeName}</div>
        </div>
        <div className={styles.footer}>
          <div>
            <div className={styles.footerInfo}>
              {`${movie.year}, ${movie.countries.join(', ')}`}
            </div>
            <div className={styles.footerInfo}>
              {movie.genres.join(', ')}
            </div>
          </div>
          <button className={styles.replaceButton} />
        </div>
      </div>
    </div>
  );
}

export default MovieListItem;
