import { FC, PropsWithChildren } from 'react';

import styles from './Wrapper.module.css'

type Props = {
  extraClass?: string;
}

const Wrapper: FC<PropsWithChildren<Props>> = ({ extraClass, children }) => {
  return (
    <div className={`${styles.wrapper} ${extraClass}`}>
      {children}
    </div>
  );
}

export default Wrapper;
