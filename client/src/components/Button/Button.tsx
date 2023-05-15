import { FC, PropsWithChildren } from 'react';

import styles from './Button.module.css';

type Props = {
  onClick: () => void;
  className?: string;
}

const Button: FC<PropsWithChildren<Props>> = ({ onClick, className, children }) => {
  return (
    <button
      className={className ? (`${className} ${styles.button}`) : styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
