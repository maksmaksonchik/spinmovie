import { FC } from 'react';

import styles from './Loader.module.css';

const Loader: FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
}

export default Loader;
