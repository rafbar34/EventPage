import {mockDataInterface} from '@/interface/mock-dataInterface';
import {EventItem} from './event-item';
import styles from './event-list.module.css';
export const EventList = (props: any) => {
  const {items} = props;
  return (
    <ul className={styles.list}>
      {items.map((event: any) => {
        return (
          <EventItem
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        );
      })}
    </ul>
  );
};
