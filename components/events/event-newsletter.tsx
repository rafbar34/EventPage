import {useEffect, useState, useContext} from 'react';
import {Input} from '../UI/input';
import style from './event-newsletter.module.css';
import {checkValidation} from '@/helpers/check-validation';
import {NotificationsContext} from '@/store/notifications-context';

export const EventNewsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<boolean | undefined>(false);
  const customInputStyle = {width: '35%'};
  const customButtonStyle = {opacity: 0.4};
  const notificationCtx = useContext(NotificationsContext);
  useEffect(() => {
    setError(checkValidation(email));
  }, [email]);

  const sendEmailHandler = () => {
    notificationCtx.showNotification({
      title: 'Signing up...',
      text: 'Registring for newsLetter',
      status: 'pending',
    });
    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({email: email}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        notificationCtx.showNotification({
          title: 'Success',
          text: 'Success sign newsLetter',
          status: 'success',
        });
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: 'Error',
          text: err.message || 'failed',
          status: 'error',
        });
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
