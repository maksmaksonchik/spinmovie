import { FC, useState } from 'react';
import styles from './FiltersItemWithRange.module.css';
import InputMask from 'react-input-mask';

type Props = {
  id: string,
  name: string;
  placeholders: {
    from: string,
    to: string
  };
  mask: string,
  changeHandler: (range: { from?: string, to?: string }) => void
}

const FiltersItemWithRange: FC<Props> = ({ id, name, changeHandler, placeholders, mask }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleFromInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    changeHandler({ from: newValue, to });
    setFrom(newValue);
  };

  const handleToInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    changeHandler({ from, to: newValue });
    setTo(newValue);
  };

  const handleInputEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  return (
    <div className={styles.container}>
      <label htmlFor={`${id}From`} className={styles.name}>{name}</label>
      <div className={styles.inputContainer}>
        <InputMask
          mask={mask}
          className={styles.input}
          id={`${id}From`}
          type="text"
          spellCheck="false"
          placeholder={placeholders.from}
          onKeyDown={handleInputEnter}
          onBlur={handleFromInputBlur}
        />
        <label htmlFor={`${id}To`} className={styles.line}>-</label>
        <InputMask
          mask={mask}
          className={styles.input}
          id={`${id}To`}
          type="text"
          spellCheck="false"
          placeholder={placeholders.to}
          onKeyDown={handleInputEnter}
          onBlur={handleToInputBlur}
        />
      </div>
    </div>
  );
}

export default FiltersItemWithRange;
