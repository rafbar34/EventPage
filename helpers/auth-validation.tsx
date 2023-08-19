import {useSession} from 'next-auth/react';

export const checkIsLogged = () => {
  const {data: session, status} = useSession();
  if (session === null || status !== 'authenticated') {
    return false;
  } else {
    return true;
  }
};
