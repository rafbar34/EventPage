import {EventList} from '@/components/events/event-list';
import {getFilteredEvents} from '@/data/mock-data';
import {useRouter} from 'next/router';

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

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
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found</p>;
  }
  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};
export default FilteredEventsPage;
