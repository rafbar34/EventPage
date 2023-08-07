import {useEffect, useState} from 'react';
import {Input} from '../UI/input';
import style from './event-newsletter.module.css';
import {checkValidation} from '@/helpers/check-validation';

export const EventNewsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<boolean | undefined>(false);
  const customInputStyle = {width: '35%'};
  const customButtonStyle = {opacity: 0.4};
  useEffect(() => {
    setError(checkValidation(email));
  }, [email]);

  const sendEmailHandler = async () => {
    const respone = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({email: email}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  return (
    <div className={style.box}>
      <Input
        style={customInputStyle}
        type='email'
        name='newsletter'
        placeholder='newsletter'
        setState={setEmail}
      />
      <button
        onClick={error ? () => null : () => sendEmailHandler()}
        style={error ? customButtonStyle : {}}
        className={style.button}>
        Add email
      </button>
    </div>
  );
};
