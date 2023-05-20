import { FC, useState } from "react";

import styles from './LoginForm.module.css';

const Login: FC = () => {
  const [isReg, setIsReg] = useState(false);
  return (
    <div className={styles.form}>
      <h2 className={styles.header}>
        {isReg
          ? 'Регистрация'
          : 'Вход'
        }
      </h2>
      <label className={styles.inputContainer}>
        <input
          className={styles.input}
          name="login"
          type="text"
          placeholder="Логин"
        />
      </label>
      <label className={styles.inputContainer}>
        <input
          className={styles.input}
          name="password"
          type="text"
          placeholder="Пароль"
        />
      </label>
      {isReg && (
        <label className={styles.inputContainer}>
          <input
            className={styles.input}
            name="repeatPassword"
            type="text"
            placeholder="Повторите пароль"
          />
        </label>
      )}
      <label className={styles.buttonContainer}>
        <button
          className={styles.typeButton}
          onClick={() => setIsReg(!isReg)}
        >
          {isReg
            ? 'войти'
            : 'зарегистрироваться'
          }
        </button>
      </label>

    </div>
  );
}

export default Login;
