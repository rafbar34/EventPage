import {EventList} from '@/components/events/event-list';
import {EventSearch} from '@/components/events/event-search';
import { getAllEvents } from '@/helpers/api-util';
import { GetStaticPaths, GetStaticProps } from 'next';
import {useRouter} from 'next/router';
import React from 'react';

const EventsPage = (props:any) => {
  const router = useRouter();
  const findEventHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={props.events} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const allEvents= await getAllEvents()
  return {
    props: {events:allEvents},
    revalidate:60
  };
}

export default EventsPage;
