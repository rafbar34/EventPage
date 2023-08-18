import Link from 'next/link';
import style from './Header.module.css'
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link href={'/'}>Next Event</Link>
      </div>
      <nav className={style.navigation}>
        <li>
          <Link href={'/events/addEvents'}>Add events</Link>
        </li>
        <li>
          <Link href={'/auth/login'}>Login</Link>
        </li>
        <li>
          <Link href={'/auth/signIn'}>Sign in</Link>
        </li>
        <li>
          <Link href={'/events'}>Logout</Link>
        </li>
      </nav>
    </header>
  );
};
