import {EventList} from '@/components/events/event-list';
import {EventSearch} from '@/components/events/event-search';
import {getAllEvents} from '@/data/mock-data';
import {useRouter} from 'next/router';

const EventsPage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();
  const findEventHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={allEvents} />
    </div>
  );
};
export default EventsPage;
