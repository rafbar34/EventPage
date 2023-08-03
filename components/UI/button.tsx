import Link from 'next/link';
import styles from './button.module.css';
type ButtonType = {
  link?: string | undefined;
  children: React.ReactNode;
};
export const Button = (props: ButtonType) => {
  if (props.link) {
    return (
      <Link
        className={styles.btn}
        href={props.link}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button
        type='submit'
        className={styles.btn}>
        {props.children}
      </button>
    );
  }
};
