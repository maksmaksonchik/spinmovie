import { FC, PropsWithChildren } from 'react';

import styles from './Button.module.css';

type Props = {
  onClick: () => void;
}

const Button: FC<PropsWithChildren<Props>> = ({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
