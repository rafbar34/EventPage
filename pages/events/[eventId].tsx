import EventContent from '@/components/events/event-content';
import EventLogistics from '@/components/events/event-logistics';
import {EventSummary} from '@/components/events/event-summary';
import {getEventById} from '@/data/mock-data';
import {useRouter} from 'next/router';
import {Fragment, useMemo} from 'react';

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;

  const eventData = useMemo(() => {
    return getEventById(eventId);
  }, [eventId]);

  if (!eventData) {
    return <p>No event found</p>;
  }

  return (
    <Fragment>
      <EventSummary title={eventData.title} />
      <EventLogistics
        date={eventData.date}
        address={eventData.location}
        image={eventData.image}
      />
      <EventContent>
        <p>{eventData.description}</p>
      </EventContent>
    </Fragment>
  );
};
export default EventDetailPage;
