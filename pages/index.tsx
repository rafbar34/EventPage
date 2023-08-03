import {EventList} from '@/components/events/event-list';
import {getFeaturedEvents} from '@/data/mock-data';

const HomePage = () => {
  const featEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featEvents} />
    </div>
  );
};
export default HomePage;
