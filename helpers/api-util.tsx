import {mockDataInterface} from '@/interface/mock-dataInterface';
import { filterDate } from '@/types/filterDate';

export async function getAllEvents() {
  const response = await fetch(
    'https://events-4dacd-default-rtdb.firebaseio.com/events.json'
  );
  const data = await response.json();
  let events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
export async function getEventById(id: string | number | undefined | string[]) {
  const allEvents = await getAllEvents();

  return allEvents.find((event) => String(event.id) === String(id));
}

export async function getFilteredEvents(
  dateFilter: filterDate,
) {
  const {year, month} = dateFilter;
  const events = await getAllEvents();
  let filteredEvents = events.filter((event: any) => {
    const eventDate = new Date(event.date);
    return (
      Number(eventDate.getFullYear()) === Number(year) &&
      Number(eventDate.getMonth()) === Number(month) - 1
    );
  });

  return filteredEvents;
}