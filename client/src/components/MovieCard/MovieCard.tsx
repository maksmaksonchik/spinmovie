import { FC } from "react";

import styles from './MovieCard.module.css';
import { TMovie } from "../../models/TMovie";
import kpLogo from '../../img/kinopoisk-logo.png'

type Props = {
  movie: TMovie;
}

const MovieCard: FC<Props> = ({ movie }) => {
  return (
    <article className={styles.movie}>
      <img
        className={styles.poster}
        src={movie.poster}
        alt="Movie poster" />
      <div className={styles.info}>
        <div className={styles.header}>
          <div className={styles.nameContainer}>
            <h2 className={styles.name}>{movie.name}</h2>
            <div className={styles.rating}>{movie.rating}</div>
          </div>
          <div className={styles.altName}>{movie.alternativeName}</div>
          <div className={styles.watchContainer}>
            <a
              className={`${styles.watchButton} ${styles.kpButton}`}
              href={`https://www.kinopoisk.ru/film/${movie.id}/`}
              target="_blank"
              rel="noreferrer"
            >
              <img className={styles.watchLogo}
                src={kpLogo}
                alt={`Перейти на Кинопоиск`}
              />
              <span>Кинопоиск</span>
            </a>
            {movie.watchability.slice(0, 1).map((item, i) => (
              <a
                className={styles.watchButton}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                key={i}
              >
                <img className={styles.watchLogo}
                  src={item.logo.url}
                  alt={`Смотреть на ${item.name}`}
                />
                <span>Смотреть</span>
              </a>
            ))}
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.param}>
            <div className={styles.paramName}>Год</div>
            <div className={styles.paramValue}>{movie.year}</div>
          </div>
          <div className={styles.param}>
            <div className={styles.paramName}>Страна</div>
            <div className={styles.paramValue}>{movie.countries.join(', ')}</div>
          </div>
          <div className={styles.param}>
            <div className={styles.paramName}>Жанр</div>
            <div className={styles.paramValue}>{movie.genres.join(', ')}</div>
          </div>
          <div className={styles.param}>
            <div className={styles.paramName}>Длительность</div>
            <div className={styles.paramValue}>{movie.movieLength}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;
