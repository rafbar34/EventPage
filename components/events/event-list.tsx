import {mockDataInterface} from '@/interface/mock-dataInterface';
import {EventItem} from './event-item';

export const EventList = (props: any) => {
  const {items} = props;
  return (
    <ul>
      {items.map((event: any) => {
        return <EventItem />;
      })}
    </ul>
  );
};
