import { FC, useState } from 'react';

import styles from './UserStatus.module.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Login from '../LoginForm/LoginForm';

const UserStatus: FC = () => {
  const isAuth = false;
  const username = 'maksmaksonchik';

  const [modalActive, setModalActive] = useState(false);
  const modalOnClose = () => setModalActive(false);

  const LogInClickHandler = () => {
    setModalActive(true);
  }

  return (
    isAuth
      ? (
        <div className={styles.container}>
          <div>{username}</div>
          <button className={styles.logout} />
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
