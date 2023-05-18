import { FC, useState } from 'react';

import { TMovie } from '../../models/TMovie';
import styles from './MovieListItem.module.css';
import Modal from '../Modal/Modal';
import MovieCard from '../MovieCard/MovieCard';

type Props = {
  movie: TMovie;
}

const MovieListItem: FC<Props> = ({ movie }) => {
  const [modalActive, setModalActive] = useState(false);
  const modalOnClose = () => setModalActive(false);

  return (
    <>
      <div className={styles.movie} onClick={() => { setModalActive(true) }}>
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
            <button
              className={styles.replaceButton}
              onClick={(e) => {
                e.stopPropagation();
                alert('Редактировать');
              }}
            />
          </div>
        </div>
      </div>
      <Modal active={modalActive} onClose={modalOnClose}>
        <MovieCard movie={movie} />
      </Modal>
    </>
  );
}

export default MovieListItem;
