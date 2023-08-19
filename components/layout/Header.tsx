import Link from 'next/link';
import style from './Header.module.css';
import {useSession, signOut} from 'next-auth/react';
import {Fragment} from 'react';

export const Header = () => {
  const {data: session, status} = useSession();
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link href={'/'}>Next Event</Link>
      </div>
      <nav className={style.navigation}>
        {status === 'authenticated' ? (
          <Fragment>
            <li>
              <Link href={'/events/addEvents'}>Add events</Link>
            </li>
            <li>
              <Link
                onClick={() => signOut()}
                href={'/events'}>
                Logout
              </Link>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li>
              {' '}
              <Link href={'/auth/login'}>Login</Link>
            </li>
            <li>
              <Link href={'/auth/signIn'}>Sign in</Link>
            </li>
          </Fragment>
        )}
      </nav>
    </header>
  );
};
