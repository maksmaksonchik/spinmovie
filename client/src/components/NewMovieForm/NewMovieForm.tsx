import { FC, useState } from 'react';

import styles from './NewMovieForm.module.css'
import MovieList from '../MovieList/MovieList';
import { movieApi } from '../../services/movieApi/movieApi';
import { TMovie } from '../../models/TMovie';

type Props = {
  replaceAction?: (movie: TMovie) => void;
}

const MovieReplacingSearch: FC<Props> = ({ replaceAction }) => {
  const [skip, setSkip] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const { data: movieList } = movieApi.useSearchByNameQuery(searchTerm, { skip });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput.length < 1) {
      setSkip(true);
      setSearchTerm(searchInput);
      return;
    }
    setSkip(false);
    setSearchTerm(searchInput);
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <label className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          placeholder='Поиск по названию'
        />
      </label>
      <MovieList
        movieList={movieList ?? []}
        type='searchList'
        replaceAction={replaceAction}
      />
    </form>
  );
}

export default MovieReplacingSearch;
