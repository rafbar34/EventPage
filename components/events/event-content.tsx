import classes from './event-content.module.css';

export const EventContent = (props: any) => {
  return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;
