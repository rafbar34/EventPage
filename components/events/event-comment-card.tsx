import style from './event-comment-card.module.css';
export const EventCommentCard = ({data}: any) => {
  return (
    <div className={style.card}>
      <div className={style.top}>
        <div>Email: {data.email}</div>
      </div>
      <div className={style.textArea}>{data.content}</div>
    </div>
  );
};
