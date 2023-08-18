import { LoginPage } from '@/components/auth/login';
import {EventList} from '@/components/events/event-list';
import {EventNewsletter} from '@/components/events/event-newsletter';
import {getFeaturedEvents} from '@/helpers/api-util';
import Head from 'next/head';
const Login = (props: any) => {
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
      <LoginPage/>
   
    </div>
  );
};
export const getServerSideProps = async (context) => {
  return {
    props: {},
  };
};
export default Login;
