import { SignInPage } from '@/components/auth/signIn';
import {getFeaturedEvents} from '@/helpers/api-util';
import Head from 'next/head';
import React from 'react';

const SignIn = (props: any) => {
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
      <SignInPage/>
   
    </div>
  );
};
export const getServerSideProps = async (context) => {
  return {
    props: {},
  };
};
export default SignIn;
