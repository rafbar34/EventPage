import {useEffect, useState} from 'react';
import {Button} from '../UI/button';
import {Input} from '../UI/input';
import styles from './login.module.css';
import {useRouter} from 'next/router';
export const SignInPage = () => {
  const router = useRouter()
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signInHandler = async (event) => {
    event.preventDefault();

    try {
      if (!email.includes('@')) {
        return alert('wrong email');
      }
      if (password.length <= 6) {
        return alert('Password not have require length');
      }
      if (password !== confirmPassword) {
        return alert('password not equal confirm password');
      }
      const response = await fetch('/api/signIn', {
        method: 'POST',
        body: JSON.stringify({
          userName,
          email,
          password,
        }),
        headers: {'Content-Type': 'application/json'},
      });

        const res =await response.json()
       if(res.message === "success"){
        router.push('/auth/login')
       }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={signInHandler}
        className={styles.form_box}>
        <div className={styles.form_input}>
          Email
          <div className={styles.input_width}>
            <Input
              name='email'
              placeholder='Enter Email'
              setState={setEmail}
              type='email'
            />
          </div>
        </div>
        <div className={styles.form_input}>
          Username
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
          Password
          <div className={styles.input_width}>
            <Input
              name='password'
              placeholder='Enter password'
              setState={setPassword}
              type='password'
            />
          </div>
        </div>
        <div className={styles.form_input}>
          Confirm password
          <div className={styles.input_width}>
            <Input
              name='confrimPassword'
              placeholder='Enter password'
              setState={setConfirmPassword}
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
