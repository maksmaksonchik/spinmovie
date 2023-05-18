import { FC, PropsWithChildren } from "react";

import styles from './Modal.module.css';
import { useOutsideClick } from "../../hooks/useOutsideClick";

type Props = {
  active: boolean;
  onClose: () => void;
}

const Modal: FC<PropsWithChildren<Props>> = ({ active, onClose, children }) => {
  const ref = useOutsideClick(onClose);
  
  if (!active) return null;
  
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal} ref={ref}>
        <button
          className={styles.closeButton}
          onClick={onClose} />
        {children}
      </div>
    </div>
  );
}

export default Modal;
