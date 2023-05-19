import { FC } from "react";

import styles from './Options.module.css';
import MovieList from "../../MovieList/MovieList";
import Button from "../../Button/Button";
import { movieApi } from "../../../store/movieApi/movieApi";

const Options: FC = () => {
  const { data: movieList } = movieApi.useFetchTopTenQuery('');

  return (
    <div className={styles.options}>
      {movieList
        ? <MovieList movieList={movieList} type='wheelList'/>
        : 'Загрузка...'
      }

      <Button
        className={styles.submit}
        onClick={() => alert('Сохранить подборку')}>Сохранить подборку</Button>
    </div>
  );
}

export default Options;
