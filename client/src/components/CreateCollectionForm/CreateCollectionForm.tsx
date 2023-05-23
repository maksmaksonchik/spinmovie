import { FC, useEffect, useState } from "react";
import styles from './CreateCollectionForm.module.css'
import { TMovie } from "../../models/TMovie";
import Button from "../Button/Button";
import MovieList from "../MovieList/MovieList";
import { collectionApi } from "../../services/collectionApi/collectionsApi";
import Loader from "../Loader/Loader";

type Props = {
  movieList: TMovie[];
  onClose: () => void;
}

const CreateCollectionForm: FC<Props> = ({ movieList, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [create, {isLoading, isError, isSuccess}] = collectionApi.useCreateMutation();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      return setError('Введите название подборки');
    }
    setName(event.target.value);
    setError('');
  }

  const handleDescriptionChange = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name) {
      return setError('Введите название подборки');
    }
    setError('')
    const movieIds = movieList.map(movie => movie.id);
    create({
      title: name,
      description,
      items: movieIds,
    });
  }

  useEffect(() => {
    if (isError) {
      setError('Ошибка сервера')
    }
    if (isSuccess) {
      onClose()
    }
  }, [isError, isSuccess, onClose])

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        Сохранить подборку:
      </div>
      <MovieList
        movieList={movieList}
        type='searchList'
      />
      <div className={styles.inputContainer}>
        <input
          className={styles.name}
          type="text"
          placeholder="Название подборки"
          onBlur={handleNameChange}
        />
        <textarea
          rows={4}
          className={styles.description}
          placeholder="Описание подборки"
          onBlur={handleDescriptionChange}
        />
      </div>
      <div className={styles.error}>
        {isLoading ? <Loader /> : error}
      </div>
      <Button
        className={styles.submit}
        type="submit"
      >
        Сохранить подборку
      </Button>
    </form>
  );
}

export default CreateCollectionForm;
