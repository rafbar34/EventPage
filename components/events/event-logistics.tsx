import LogisticsItem from './logistics-item';
import classes from './event-logistics.module.css';
import {mockDataInterface} from '@/interface/mock-dataInterface';

const EventLogistics = (props: mockDataInterface) => {
  const {date = new Date(), address, image, imageAlt} = props;

  const humanReadableDate = new Date(date).toLocaleDateString('pl', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address?.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img
          src={`/${image}`}
          alt={imageAlt}
        />
      </div>
      <ul className={classes.list}>
        <LogisticsItem>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
