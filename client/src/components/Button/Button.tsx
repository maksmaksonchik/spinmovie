import { FC, PropsWithChildren } from 'react';

import styles from './Button.module.css';

type Props = {
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: FC<PropsWithChildren<Props>> = ({ onClick, className, children, type}) => {
  return (
    <button
      className={className ? (`${className} ${styles.button}`) : styles.button}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
