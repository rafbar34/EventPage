import { LoginPage } from '@/components/auth/login';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getSession } from "next-auth/react"
import {useRouter} from 'next/router';

const Login = (props: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {
        getSession().then((session) => {
        if (session) {
          router.replace('/');
        } else {
          setIsLoading(false);
        }
      });
    }, [router]);
    if (isLoading) {
      return <p>Loading...</p>;
    }
  
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

export default Login;
