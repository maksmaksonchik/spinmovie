import { FC } from "react";

import styles from './Options.module.css';
import MovieList from "../MovieList/MovieList";
import Button from "../Button/Button";
import { useAppSelector } from "../../hooks/redux";

const Options: FC = () => {
  const { wheelList } = useAppSelector(state => state.movieReducer);

  return (
    <div className={styles.options}>
      {wheelList
        ? <MovieList movieList={wheelList} type='wheelList' />
        : 'Загрузка...'
      }

      <Button
        className={styles.submit}
        onClick={() => alert('Сохранить подборку')}>
        Сохранить подборку
      </Button>
    </div>
  );
}

export default Options;
