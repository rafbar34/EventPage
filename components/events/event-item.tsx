import Link from 'next/link';
import styles from './event-item.module.css';
import {Button} from '../UI/button';
import Image from 'next/image';
export const EventItem = (props: any) => {
  const {title, image, date, location, id} = props;

  const parseDate = new Date(date).toLocaleDateString('pl', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formatAddress = location.replace(',', '\n');
  const exploreLink = `/events/${id}`;
  return (
    <li className={styles.item}>
      <Image
        width={250}
        height={160}
        src={'/' + image}
        alt={title}
      />

      <div className={styles.content}>
        <div className={styles.summary}>
          <div>
            <h2>{title}</h2>
          </div>
          <div className={styles.date}>
            <time>{parseDate}</time>
          </div>
          <div className={styles.address}>
            <time>{formatAddress}</time>
          </div>
          <div className={styles.actions}>
            <Button link={exploreLink}>Explore event</Button>
          </div>
        </div>
      </div>
    </li>
  );
};
