import EventContent from '@/components/events/event-content';
import EventLogistics from '@/components/events/event-logistics';
import {EventSummary} from '@/components/events/event-summary';
import {getEventById, getFeaturedEvents} from '@/features/eventFeat';
import {useRouter} from 'next/router';
import {Fragment, useMemo} from 'react';
import {GetStaticPaths} from 'next';
import {mockDataInterface} from '@/interface/mock-dataInterface';
import path from 'path';
import fs from 'fs/promises';
const EventDetailPage = (props: any) => {
  const router = useRouter();
  const eventId: string | number | undefined | string[] = router.query.eventId;

  if (!props.events) {
    return <p>No event found</p>;
  }

  return (
    <Fragment>
      <EventSummary title={props.events.title} />
      <EventLogistics
        date={props.events.date}
        address={props.events.location}
        image={props.events.image}
      />
      <EventContent>
        <p>{props.events.description}</p>
      </EventContent>
    </Fragment>
  );
};
export async function getStaticProps(context: any) {
  const filePath = path.join(process.cwd(), 'data', 'mock-data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  const {params} = context;
  const eventData = getEventById(params.eventId, data);
  console.log(eventData)
  if (!eventData) {
    return {notFound:true};
  } 
    return {
      props: {
        events: eventData,
      },
      revalidate: 20,
    };
}
export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'data', 'mock-data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  const eventIds = data.map((eventObject: mockDataInterface) => eventObject.id);
  const params = eventIds.map((id: string | number) => ({
    params: {eventId: id},
  }));
  return {
    paths: params,
    fallback: true,
  };
};

export default EventDetailPage;
