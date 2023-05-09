import { FC } from 'react';

import styles from './Header.module.css';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

const Header: FC = () => {
  const LogInClickHandler = () => {
    alert('Тут должна быть авторизация');
  }

  return (
    <header className={styles.header}>
      <Wrapper extraClass={styles.headerWrapper}>
        <Logo />
        <Button onClick={LogInClickHandler}>
          Войти
        </Button>
      </Wrapper>
    </header>
  )
}

export default Header;
