import {EventList} from '@/components/events/event-list';
import {EventNewsletter} from '@/components/events/event-newsletter';
import {getFeaturedEvents} from '@/helpers/api-util';
import Head from 'next/head';
import React from 'react';
const HomePage = (props: any) => {
  const {events} = props;
  return (
    <div>
      <Head>
        <title>Events</title>
        <meta
          name='description'
          content='Check events around your neighborhood'
        />
      </Head>
      <EventNewsletter />
      <EventList items={events} />
    </div>
  );
};
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 20,
  };
}
export default HomePage;
