import { FC, useState } from 'react';

import styles from './Wheel.module.css'
import arrow from '../../img/arrow.svg'
import { getRandomSpin } from './utils/getRandomSpin';
// import { useAppSelector } from '../../hooks/redux';
import Modal from '../Modal/Modal';
import MovieCard from '../MovieCard/MovieCard';
import { movieApi } from '../../store/movieApi/movieApi';

type TResult = number | undefined;

let currantRotation = 0;

const Wheel: FC = () => {
  // const { movieList } = useAppSelector(state => state.movieListReducer);
  const {data: movieList} = movieApi.useFetchTopTenQuery('');

  const [modalActive, setModalActive] = useState(false);
  const modalOnClose = () => setModalActive(false);

  const [spinResult, setSpinResult] = useState<TResult>();

  const INITIAL_ARROW_POSITION = 18;

  const spinWheel = () => {
    const disc = document.querySelector(`.${styles.disc}`) as HTMLElement;
    if (!disc) {
      console.error('Колесо не работает :(');
      return;
    };

    currantRotation = currantRotation + getRandomSpin();
    setSpinResult(10 - Math.ceil((currantRotation - INITIAL_ARROW_POSITION) % 360 / 36));

    disc.style.transform = `rotate(${currantRotation}deg)`;

    setTimeout(() => setModalActive(true), 5000);
  };

  return (
    <>
      <div className={styles.wheel}>
        <button className={styles.spin} onClick={spinWheel}>Spin!</button>
        <img className={styles.arrow} src={arrow} alt="arrow" />
        <div className={styles.disc}>
          {movieList && movieList.map((movie, i) => (
            <div
              className={styles[`item${i}`]}
              key={i}
            >
              <div
                className={styles.poster}
                style={{ background: `url(${movie.poster}) top/cover` }}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal active={modalActive} onClose={modalOnClose}>
        <div>
          {typeof spinResult === 'number' && movieList
            ? <MovieCard movie={movieList[spinResult]}/>
            : 'Что-то пошло не так'}
        </div>
      </Modal>
    </>
  );
};

export default Wheel;
