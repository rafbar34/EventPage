import {mockDataInterface} from '@/interface/mock-dataInterface';
import {filterDate} from '@/types/filterDate';
import fs from 'fs/promises';
import path from 'path';

export function getFeaturedEvents(events: Array<mockDataInterface>) {
  return events.filter((event) => event.isFeatured);
}

export function getAllEvents(events: Array<mockDataInterface>) {
  return events;
}

export function getFilteredEvents(
  dateFilter: filterDate,
  events: Array<mockDataInterface>
) {
  const {year, month} = dateFilter;

  let filteredEvents = events.filter((event: any) => {
    const eventDate = new Date(event.date);
    return (
      Number(eventDate.getFullYear()) === Number(year) &&
      Number(eventDate.getMonth()) === Number(month) - 1
    );
  });

  return filteredEvents;
}

export function getEventById(
  id: string | number | undefined | string[],
  events: Array<mockDataInterface>
) {
  return events.find((event) => event.id === id);
}


