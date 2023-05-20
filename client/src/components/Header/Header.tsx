import { FC } from 'react';

import styles from './Header.module.css';
import Wrapper from '../Wrapper/Wrapper';
import Logo from '../Logo/Logo';
import UserStatus from '../UserStatus/UserStatus';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Wrapper extraClass={styles.headerWrapper}>
        <Logo />
        <UserStatus />
        
      </Wrapper>
    </header>
  )
}

export default Header;
