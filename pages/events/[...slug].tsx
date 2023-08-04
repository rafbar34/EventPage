import {EventList} from '@/components/events/event-list';
import {getFeaturedEvents, getFilteredEvents} from '@/features/eventFeat';
import fs from 'fs/promises';
import path from 'path';
import {useRouter} from 'next/router';
import { GetStaticPaths } from 'next';
import { mockDataInterface } from '@/interface/mock-dataInterface';

const FilteredEventsPage = (props: any) => {
  const router = useRouter();
  const filterData = router.query.slug;
  const events = props.events;
  if (!filterData) {
    return <p>Loading</p>;
  } else if (filterData.length >= 3) {
    return <p>bad route</p>;
  }

  const numYear = Number(filterData[0]);
  const numMonth = Number(filterData[1]);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter, please enter correct values</p>;
  }
  const filteredEvents = getFilteredEvents(
    {
      year: numYear,
      month: numMonth,
    },
    events
  );
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found</p>;
  }
  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};
export async function getStaticProps(context: any) {
  const filePath = path.join(process.cwd(), 'data', 'mock-data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return {
    props: {
      events: getFeaturedEvents(data),
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
    fallback: 'blocking',
  };
};
export default FilteredEventsPage;
