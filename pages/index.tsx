import fs from 'fs/promises';
import path from 'path';
import {EventList} from '@/components/events/event-list';
import { getFeaturedEvents} from '@/features/eventFeat';

const HomePage = (props: any) => {
  const {events} = props;
  console.log('test');
  return (
    <div>
      <EventList items={events} />
    </div>
  );
};
export async function getStaticProps(context: any) {
  const filePath = path.join(process.cwd(), 'data', 'mock-data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return {
    props: {
      events: getFeaturedEvents(data),
    },
    revalidate: 20,
  };
}
export default HomePage;
