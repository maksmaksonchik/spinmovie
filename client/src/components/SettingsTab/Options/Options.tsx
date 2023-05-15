import { FC } from "react";

import styles from './Options.module.css';
import MovieList from "../../MovieList/MovieList";

const Options: FC = () => {
  return (
    <div className={styles.options}>
      <MovieList />
    </div>
  );
}

export default Options;
