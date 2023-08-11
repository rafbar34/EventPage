import styles from './notifications.module.css';
export const Notifications = ({text, status, title}) => {
  let background;
  if (status === 'success') {
    background = 'green';
  }
  if (status === 'pending') {
    background = 'orange';
  }
  if (status === 'reject') {
    background = 'orange';
  }
  return (
    <div
      style={{backgroundColor: background, zIndex:10}}
      className={styles.container}>
      {status}:{text}
    </div>
  );
};
