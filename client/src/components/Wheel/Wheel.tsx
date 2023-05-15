import { FC, useEffect, useState } from 'react';

import styles from './Wheel.module.css'
import arrow from '../../img/arrow.svg'
import { getRandomSpin } from './utils/getRandomSpin';
import { getMovieList } from '../../services/requestMock';
import { TMovie } from '../../types';

const Wheel: FC = () => {

  const [movieList, setMovieList] = useState([] as TMovie[]);

  const fetchMovieList = async () => {
    const movieList = await getMovieList();

    setMovieList(movieList);
  }

  useEffect(() => { fetchMovieList() }, []);

  let currantRotation = 0;

  // начальное положение стрелки: 18 градусов (от начала нулевого айтема)
  const INITIAL_ARROW_POSITION = 18;

  const spinWheel = () => {
    const disc = document.querySelector(`.${styles.disc}`) as HTMLElement;

    if (!disc) {
      console.error('Колесо не работает :(');
      return;
    };

    const randomSpin = getRandomSpin();

    disc.style.transform = `rotate(${-(currantRotation + randomSpin)}deg)`;
    currantRotation = currantRotation + randomSpin;

    const spinResult = Math.floor((currantRotation + INITIAL_ARROW_POSITION) % 360 / 36);

    setTimeout(() => console.log(movieList[spinResult].name), 5000);
  }

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
        {/* <div className={styles.item0}>0</div>
        <div className={styles.item1}>1</div>
        <div className={styles.item2}>2</div>
        <div className={styles.item3}>3</div>
        <div className={styles.item4}>4</div>
        <div className={styles.item5}>5</div>
        <div className={styles.item6}>6</div>
        <div className={styles.item7}>7</div>
        <div className={styles.item8}>8</div>
        <div className={styles.item9}>9</div> */}
      </div>
    </div>
  );
}

export default Wheel;
