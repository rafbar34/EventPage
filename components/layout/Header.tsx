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
          <Link href={'/events'}>All events</Link>
        </li>
      </nav>
    </header>
  );
};
