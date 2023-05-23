import React, { FC, useEffect, useState } from "react";

import styles from './Filters.module.css';
import Button from "../Button/Button";
import FiltersItemWithTags from "../FiltersItemWithTags/FiltersItemWithTags";
import { filtersWithRange, filtersWithTags } from "./FilterOptions";
import FiltersItemWithRange from "../FiltersItemWithRange/FiltersItemWithRange";
import { TFilterRange, TFilters } from "../../models/TFilters";
import { movieApi } from "../../services/movieApi/movieApi";
import Loader from "../Loader/Loader";

const Filters: FC = () => {
  const [search, { data: result, isError, isSuccess, isFetching }] = movieApi.useLazySearchByFiltersQuery();
  const [filters, setFilters] = useState({} as TFilters);
  const [fetchingError, setFetchingError] = useState('');

  useEffect(() => {
    if (result !== undefined && (result.length < 10)) {
      return setFetchingError('Слишком мало фильмов :(')
    }
    if (!result && (isError || isSuccess)) {
      return setFetchingError('Что-то пошло не так :(')
    }
  }, [isError, isSuccess, result])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setFetchingError('');
    search(filters);
  }

  const createHandleTagsChange = (id: string) => (values: string[]) => {
    const newState = {
      ...filters,
      [id]: values,
    }
    setFilters(newState);
  }

  const createHandleRangeChange = (id: string) => (range: TFilterRange) => {
    const newState = {
      ...filters,
      [id]: range,
    }
    setFilters(newState);
  }

  return (
    <form
      className={styles.filters}
      onSubmit={handleSubmit}
    >
      <div className={styles.container}>
        {filtersWithTags.map(({ id, name, placeholder }) => (
          <FiltersItemWithTags
            id={id}
            name={name}
            placeholder={placeholder}
            changeHandler={createHandleTagsChange(id)}
            key={id}
          />
        ))}
        {filtersWithRange.map(({ id, name, placeholders, mask }) => (
          <FiltersItemWithRange
            id={id}
            name={name}
            placeholders={placeholders}
            changeHandler={createHandleRangeChange(id)}
            key={id}
            mask={mask}
          />
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.status}>
          {isFetching ? <Loader /> : fetchingError}
        </div>

        <Button
          type='submit'
          className={styles.submit}
        >
          Применить
        </Button>
      </div>
    </form>
  );
}

export default Filters;
