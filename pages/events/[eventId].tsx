import EventContent from '@/components/events/event-content';
import EventLogistics from '@/components/events/event-logistics';
import {EventSummary} from '@/components/events/event-summary';
import {useRouter} from 'next/router';
import {Fragment, useMemo} from 'react';
import {GetStaticPaths} from 'next';
import {mockDataInterface} from '@/interface/mock-dataInterface';
import path from 'path';
import fs from 'fs/promises';
import {
  getAllEvents,
  getEventById,
  getFeaturedEvents,
} from '@/helpers/api-util';
import Head from 'next/head';
import {EventAddCommentSection} from '@/components/events/event-add-comment-section';
import {EventShowCommentSection} from '@/components/events/event-show-comments';
import {checkIsLogged} from '@/helpers/auth-validation';
const EventDetailPage = (props: any) => {
  if (!props.events) {
    return <p>No event found</p>;
  }
  const checkSession = checkIsLogged();
  return (
    <Fragment>
      <Head>
        <title>{props.events.title}</title>
        <meta
          name='description'
          content='Check events around your neighborhood'
        />
      </Head>
      <EventSummary title={props.events.title} />
      <EventLogistics
        date={props.events.date}
        address={props.events.location}
        image={props.events.image}
      />
      <EventContent>
        <p>{props.events.description}</p>
      </EventContent>
      {checkSession === true ? (
        <EventAddCommentSection />
      ) : (
        <div style={{textAlign:'center', marginTop:10}}>

        Please Login to can add comments
        </div>
      )}

      <EventShowCommentSection />
    </Fragment>
  );
};
export async function getStaticProps(context: any) {
  const {params} = context;
  const eventData = await getEventById(params.eventId);
  if (!eventData) {
    return {notFound: true};
  }
  return {
    props: {
      events: eventData,
    },
    revalidate: 10,
  };
}
export const getStaticPaths: GetStaticPaths = async () => {
  const featuredEvents = await getFeaturedEvents();

  const paths = featuredEvents.map((event: mockDataInterface) => {
    return {
      params: {eventId: event.id},
    };
  });
  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export default EventDetailPage;
