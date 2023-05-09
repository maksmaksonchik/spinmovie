import { FC } from 'react';

import styles from './Logo.module.css';
import logo from '../../img/wheel-icon.svg'

const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.text}>SpinMovie</span>
      <img
        className={styles.icon}
        src={logo}
        alt="logo"
      />
    </div>
  );
}

export default Logo;
