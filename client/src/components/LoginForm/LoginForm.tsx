import { FC, useEffect, useState } from "react";

import styles from './LoginForm.module.css';
import { userApi } from "../../services/userApi/userApi";
import Button from "../Button/Button";
import isErrorWithMessage from "./isErrorWithMessage";

const Login: FC = () => {
  const [isReg, setIsReg] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');

  const [query, { error }] = isReg
    ? userApi.useRegistrationMutation()
    : userApi.useLoginMutation();

  useEffect(() => {
    if (isErrorWithMessage(error)) {
      return setErrorMessage(error.data.message);
    }

    if (error) {
      return setErrorMessage('Неизвестная ошибка')
    }
  }, [error])


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isReg && (password !== repeat)) {
      return setErrorMessage('Пароли не совпадают');
    }

    await query({ username, password });
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      spellCheck="false"
    >
      <h2 className={styles.header}>
        {isReg
          ? 'Регистрация'
          : 'Вход'
        }
      </h2>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      <label className={styles.inputContainer}>
        <input
          className={styles.input}
          name="login"
          type="text"
          placeholder="Логин"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        />
      </label>
      <label className={styles.inputContainer}>
        <input
          className={styles.input}
          name="password"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
      </label>
      {isReg && (
        <label className={styles.inputContainer}>
          <input
            className={styles.input}
            name="repeatPassword"
            type="password"
            placeholder="Повторите пароль"
            value={repeat}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRepeat(e.target.value)}
          />
        </label>
      )}
      <Button
        className={styles.submit}
        type="submit"
      >
        {isReg ? 'Зарегистрироваться' : 'Войти'}
      </Button>
      <label className={styles.buttonContainer}>
        <button
          className={styles.typeButton}
          type="button"
          onClick={() => setIsReg(!isReg)}
        >
          {isReg
            ? 'Войти'
            : 'Зарегистрироваться'
          }
        </button>
      </label>
    </form>
  );
}

export default Login;
