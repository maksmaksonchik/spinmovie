import { FC } from 'react';

import styles from './Wheel.module.css'
import arrow from '../../img/arrow.svg'
import { getRandomSpin } from './utils/getRandomSpin';
import { useAppSelector } from '../../hooks/redux';

const Wheel: FC = () => {

  const {movieList} = useAppSelector(state => state.movieListReducer)

  let currantRotation = 0;

  // начальное положение стрелки: 18 градусов (от начала нулевого айтема)
  const INITIAL_ARROW_POSITION = 18;

  const spinWheel = () => {
    const disc = document.querySelector(`.${styles.disc}`) as HTMLElement;

    if (!disc) {
      console.error('Колесо не работает :(');
      return;
    };

    currantRotation = currantRotation + getRandomSpin();
    
    disc.style.transform = `rotate(${currantRotation}deg)`;

    const spinResult = 10 - Math.ceil((currantRotation - INITIAL_ARROW_POSITION) % 360 / 36);

    setTimeout(() => console.log(movieList[spinResult].name), 5000);
  };

  return (
    <div className={styles.wheel}>
      <button className={styles.spin} onClick={spinWheel}>Spin!</button>
      <img className={styles.arrow} src={arrow} alt="arrow" />
      <div className={styles.disc}>
        {movieList.map((movie, i) => (
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
  );
};

export default Wheel;
