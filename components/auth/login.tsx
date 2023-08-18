import {useState} from 'react';
import {Button} from '../UI/button';
import {Input} from '../UI/input';
import styles from './login.module.css';

export const LoginPage = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  return (
    <div className={styles.container}>
      <form className={styles.form_box}>
        <div className={styles.form_input}>
          Login
          <div className={styles.input_width}>
            <Input
              name='login'
              placeholder='Enter Login'
              setState={setUserName}
              type='text'
            />
          </div>
        </div>
        <div className={styles.form_input}>
          Hasło
          <div className={styles.input_width}>
            <Input
              name='password'
              placeholder='Enter password'
              setState={setPassword}
              type='password'
            />
          </div>
        </div>
        <div>
          <button className={styles.login_btn}>Login</button>
        </div>
      </form>
    </div>
  );
};
