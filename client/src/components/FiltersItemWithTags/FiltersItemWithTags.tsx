import { FC, useState } from 'react';
import styles from './FiltersItemWithTags.module.css';
import addIcon from '../../img/add-icon.svg'

type Props = {
  id: string,
  name: string;
  placeholder: string;
  changeHandler: (value: string[]) => void
}

const FiltersItemWithTags: FC<Props> = ({ id, name, changeHandler, placeholder }) => {
  const [input, setInput] = useState('');
  const [values, setValues] = useState([] as string[]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  const handleTagAdding = () => {
    const newValues = values.includes(input) ? values : [...values, input];
    changeHandler(newValues);
    setValues(newValues);
    setInput('')
  }

  const handleInputEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleTagAdding();
    }
  }

  const handleTagRemove = (removeValue: string) => {
    const newValues = values.filter(value => value !== removeValue);
    changeHandler(newValues);
    setValues(newValues);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <label htmlFor={id} className={styles.name}>{name}</label>
        <input
          className={styles.input}
          id={id}
          type="text"
          onChange={handleInputChange}
          value={input}
          spellCheck="false"
          placeholder={placeholder}
          onKeyDown={handleInputEnter}
        />
        <button
          className={styles.addButton}
          onClick={handleTagAdding}
          type='button'
        >
          <img src={addIcon} alt="Добавить тег" className={styles.addIcon} />
        </button>
      </div>
      <div className={styles.tagsContainer}>
        {values.map((value, i) => (
          <div className={styles.tag} key={i}>
            <span>{value}</span>
            <button
              className={styles.deleteButton}
              onClick={() => handleTagRemove(value)}
              type='button'
            >
              <img src={addIcon} alt="Удалить тег" className={styles.deleteIcon} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FiltersItemWithTags;
