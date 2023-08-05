
import {EventList} from '@/components/events/event-list';
import {getFeaturedEvents} from '@/helpers/api-util';
import Head from "next/head"
const HomePage = (props: any) => {
  const {events} = props;
  return (
    <div>
      <Head>
      <title>Events</title>
      <meta name='description' content='Check events around your neighborhood' />
      </Head>
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
