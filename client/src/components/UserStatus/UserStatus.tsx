import { FC, useEffect, useState } from 'react';

import styles from './UserStatus.module.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Login from '../LoginForm/LoginForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userSlice } from '../../store/slices/userSlice';

const UserStatus: FC = () => {
  const { isAuth, user } = useAppSelector(state => state.userReducer)
  const username = user && user.username;

  const dispatch = useAppDispatch()

  const [modalActive, setModalActive] = useState(false);
  const modalOnClose = () => setModalActive(false);

  const LogInClickHandler = () => {
    setModalActive(true);
  }

  const LogOutClickHandler = () => {
    dispatch(userSlice.actions.logout());
  }

  useEffect(() => {
    if (isAuth) {
      setModalActive(false)
    }
  }, [isAuth])

  return (
    isAuth
      ? (
        <div className={styles.container}>
          <div>{username}</div>
          <button
            className={styles.logout}
            onClick={LogOutClickHandler}
          />
        </div>
      )
      : (
        <>
          <Button onClick={LogInClickHandler}>Войти</Button>
          <Modal
            active={modalActive}
            onClose={modalOnClose}
          >
            <Login />
          </Modal>
        </>
      )
  );
}

export default UserStatus;
