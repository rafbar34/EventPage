import {Button} from '../UI/button';
import {Input} from '../UI/input';
import {TextArea} from '../UI/textArea';
import style from './event-form.module.css';
import {useState, useEffect} from 'react';
export const EventForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [desc, setDesc] = useState('');

  const submitFormHandler = async (event: any) => {
    event.preventDefault();
    const formData = {
      title: title,
      date: date,
      description: desc,
    };
    const response = await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers:{
        "Content-Type":'application/json'
      }
    });
    console.log(await response.json(), 'test');
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
        <button type='submit'>Create event</button>
      </form>
    </div>
  );
};
