import React, { FC, useState } from "react";

import styles from './Filters.module.css';
import Button from "../Button/Button";
import FiltersItemWithTags from "../FiltersItemWithTags/FiltersItemWithTags";
import { filtersWithRange, filtersWithTags } from "./FilterOptions";
import FiltersItemWithRange from "../FiltersItemWithRange/FiltersItemWithRange";

type TRange = {
  from?: string,
  to?: string
}

type TFilters = {
  genres?: string[],
  countries?: string[],
  staff?: string[],
  year?: TRange,
  rating?: TRange,
  length?: TRange,
}

const Filters: FC = () => {
  const [filters, setFilters] = useState({} as TFilters);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(filters);
  }

  const createHandleTagsChange = (id: string) => (values: string[]) => {
    const newState = {
      ...filters,
      [id]: values,
    }
    setFilters(newState);
  }
  
  const createHandleRangeChange = (id: string) => (range: TRange) => {
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

      <Button
        type='submit'
        className={styles.submit}
      >
        Применить
      </Button>
    </form>
  );
}

export default Filters;
