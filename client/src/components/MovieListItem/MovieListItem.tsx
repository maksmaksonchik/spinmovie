import { FC, useState } from 'react';

import { TMovie } from '../../models/TMovie';
import styles from './MovieListItem.module.css';
import Modal from '../Modal/Modal';
import MovieCard from '../MovieCard/MovieCard';
import NewMovieForm from '../NewMovieForm/NewMovieForm';
import { useAppDispatch } from '../../hooks/redux';
import { movieApi } from '../../services/movieApi/movieApi';

type Props = {
  movie: TMovie;
  index: number;
  type: 'wheelList' | 'searchList';
  replaceAction?: (movie: TMovie) => void;
}

const MovieListItem: FC<Props> = ({
  movie,
  index,
  type,
  replaceAction,
}) => {
  const dispatch = useAppDispatch();

  const [infoModalActive, setInfoModalActive] = useState(false);
  const infoModalOnClose = () => setInfoModalActive(false);

  const [replaceModalActive, setReplaceModalActive] = useState(false);
  const replaceModalOnClose = () => setReplaceModalActive(false);

  const handleItemClick = () => {
    if (type === 'wheelList') {
      setInfoModalActive(true);
      return;
    }

    replaceAction && replaceAction(movie);
  }

  const onReplace = (movie: TMovie) => {
    dispatch(movieApi.util.updateQueryData('fetchTopTen', '', (draft) => {
      draft[index] = movie;
    }))
    replaceModalOnClose();
  }

  return (
    <>
      <div className={styles.movie} onClick={handleItemClick}>
        {
          movie.poster
            ? <img
              className={styles.poster}
              src={movie.poster}
              alt="Movie poster"
            />
            : <div className={styles.posterPlaceholder} />
        }
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
            {type === 'wheelList'
              ? (
                <button
                  className={styles.replaceButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    setReplaceModalActive(true)
                  }}
                />
              ) : ('')}

          </div>
        </div>
      </div>
      <Modal active={infoModalActive} onClose={infoModalOnClose}>
        <MovieCard movie={movie} />
      </Modal>

      <Modal
        active={replaceModalActive}
        onClose={replaceModalOnClose}
      >
        <NewMovieForm
          replaceAction={onReplace}
        />
      </Modal>
    </>
  );
}

export default MovieListItem;
