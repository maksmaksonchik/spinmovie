import { FC, useState } from "react";

import styles from './Options.module.css';
import MovieList from "../MovieList/MovieList";
import Button from "../Button/Button";
import { useAppSelector } from "../../hooks/redux";
import Modal from "../Modal/Modal";
import CreateCollectionForm from "../CreateCollectionForm/CreateCollectionForm";
import Loader from "../Loader/Loader";

const Options: FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const modalOnClose = () => setModalActive(false);
  const { wheelList } = useAppSelector(state => state.movieReducer);

  return (
    <>
      <div className={styles.options}>
        {wheelList
          ? <MovieList movieList={wheelList} type='wheelList' />
          : <Loader />
        }

        <Button
          className={styles.submit}
          onClick={() => setModalActive(true)}>
          Сохранить подборку
        </Button>
      </div>

      <Modal
        active={modalActive}
        onClose={(modalOnClose) }
      >
        <CreateCollectionForm movieList={wheelList} onClose={modalOnClose} />
      </Modal>
    </>

  );
}

export default Options;
