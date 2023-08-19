import {useState} from 'react';
import {signIn} from 'next-auth/react';

import {Input} from '../UI/input';
import styles from './login.module.css';
import {useRouter} from 'next/router';

export const LoginPage = () => {
    const router = useRouter()
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const submitHandler = async (event) => {
    event.preventDefault();
    const results = await signIn('credentials', {
      redirect: false,
      email: userName,
      password: password,
    });
    if (!results?.error) {
      router.replace('/events');
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.form_box}>
        <div className={styles.form_input}>
          Login
          <div className={styles.input_width}>
            <Input
              name='email'
              placeholder='Enter Email'
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
