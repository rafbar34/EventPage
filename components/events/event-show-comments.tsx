import {EventCommentCard} from './event-comment-card';
import style from './event-show-comments.module.css'
export const EventShowCommentSection = () => {
  const data = [
    {
      nickname: 'test',
      content: 'tesssst',
      email: 'tessst@',
    },
  ];
  //sending
  return (
    <div className={style.box}>
      <header>Comments Section</header>
      <div>
        {data.map((mock) => {
          return <EventCommentCard data={mock} />;
        })}
      </div>
    </div>
  );
};
