import { FC, PropsWithChildren } from "react";

import styles from './Modal.module.css';

type Props = {
  active: boolean;
  onClose: () => void;
}

const Modal: FC<PropsWithChildren<Props>> = ({ active, onClose, children }) => {

  if (!active) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={onClose} />
        {children}
      </div>
    </div>
  );
}

export default Modal;
