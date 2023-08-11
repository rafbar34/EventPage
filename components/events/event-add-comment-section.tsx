import {Input} from '../UI/input';
import {useContext, useState} from 'react';
import {TextArea} from '../UI/textArea';
import style from './event-add-comment-section.module.css';
import {useRouter} from 'next/router';
import {NotificationsContext} from '@/store/notifications-context';
export const EventAddCommentSection = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const inputCustom = {width: '45%'};
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [content, setContent] = useState('');

  const notificationCtx = useContext(NotificationsContext);


  const submitCommentsHandler = (e: any) => {
    e.preventDefault();
    notificationCtx.showNotification({
      title: 'added coments...',
      text: 'Registring for newsLetter',
      status: 'pending',
    });
    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        userName: userName,
        content: content,
        commentId: (Math.random() * 100000).toFixed(),
        eventId: eventId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        notificationCtx.showNotification({
          title: 'Success...',
          text: 'Added new comment',
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
    <div>
      <div className={style.box}>
        <form
          onSubmit={submitCommentsHandler}
          className={style.form}>
          <div className={style.inputs}>
            <Input
              style={inputCustom}
              type='text'
              name='email'
              placeholder='email'
              setState={setEmail}
            />
            <Input
              name='userName'
              placeholder='nickname'
              style={inputCustom}
              type='text'
              setState={setUserName}
            />
          </div>
          <div className={style.textArea}>
            <TextArea
              setState={setContent}
              name='content'
              key={'content'}
              placeholder='Enter comment ...'
            />
          </div>
          <button
            type='submit'
            className={style.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
