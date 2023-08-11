import {NotificationsContext} from '@/store/notifications-context';
import {Button} from '../UI/button';
import {Input} from '../UI/input';
import {TextArea} from '../UI/textArea';
import style from './event-form.module.css';
import {useState, useContext} from 'react';
export const EventForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [desc, setDesc] = useState('');
  const notificationCtx = useContext(NotificationsContext);
  const submitFormHandler = async (event: any) => {
    event.preventDefault();
    const formData = {
      title: title,
      date: date,
      description: desc,
    };
    notificationCtx.showNotification({
      title: 'Adding...',
      text: 'Registring for newsLetter',
      status: 'pending',
    });
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        notificationCtx.showNotification({
          title: 'Added event',
          text: 'Added event',
          status: 'success',
        });
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: 'error',
          text: err.message,
          status: 'error',
        });
      });
  };
  return (
    <div className={style.center}>
      <form
        onSubmit={submitFormHandler}
        className={style.form}>
        <Input
          name='eventName'
          placeholder='Title'
          type='text'
          setState={setTitle}
        />
        <Input
          name='eventDate'
          placeholder='Date'
          type='date'
          setState={setDate}
        />
        <TextArea
          setState={setDesc}
          name='eventDescription'
          placeholder='Description'
        />
        <button className={style.button} type='submit'>Create event</button>
      </form>
    </div>
  );
};
