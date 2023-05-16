import { FC } from "react";

import styles from './Options.module.css';
import MovieList from "../../MovieList/MovieList";
import Button from "../../Button/Button";

const Options: FC = () => {
  return (
    <div className={styles.options}>
      <MovieList />
      <Button 
      className={styles.submit}
      onClick={() => alert('Сохранить подборку')}>Сохранить подборку</Button>
    </div>
  );
}

export default Options;
