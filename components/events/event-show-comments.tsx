import {useRouter} from 'next/router';
import {EventCommentCard} from './event-comment-card';
import style from './event-show-comments.module.css';
import {useEffect, useState} from 'react';
export const EventShowCommentSection = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const [comments, setComments] = useState([]);
  const getComments = async () => {
    const response = await fetch(`/api/comments/${eventId}`);
    const data = await response.json();
    setComments(data);
  };
  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className={style.box}>
      <header>Comments Section</header>
      <div className={style.list}>
        {comments.map((commentsList) => {
          return <EventCommentCard data={commentsList} />;
        })}
      </div>
    </div>
  );
};
