import { FC, useState } from "react";

import styles from './Options.module.css';
import MovieList from "../MovieList/MovieList";
import Button from "../Button/Button";
import { useAppSelector } from "../../hooks/redux";
import Modal from "../Modal/Modal";
import CreateCollectionForm from "../CreateCollectionForm/CreateCollectionForm";
import Loader from "../Loader/Loader";
import LoginForm from "../LoginForm/LoginForm";

const Options: FC = () => {
  const { isAuth } = useAppSelector(state => state.userReducer)
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
        onClose={(modalOnClose)}
      >
        {
          isAuth
            ? <CreateCollectionForm movieList={wheelList} onClose={modalOnClose} />
            : <LoginForm />
        }
        
      </Modal>
    </>

  );
}

export default Options;
