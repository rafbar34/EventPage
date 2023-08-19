import {EventForm} from '@/components/events/event-form';
import {checkIsLogged} from '@/helpers/auth-validation';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {getSession} from 'next-auth/react';

const AddEvents = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getSession().then((session) => {
      setIsLoading(true);
      if (!session) {
        router.replace('/');
      }
      setIsLoading(false);
    });
  }, [router]);
  if(isLoading){
    return <p>loading...</p>
  }
  return <EventForm />;
};
export default AddEvents;
