import {EventList} from '@/components/events/event-list';

import fs from 'fs/promises';
import path from 'path';
import {useRouter} from 'next/router';
import {GetServerSideProps, GetStaticPaths} from 'next';
import {mockDataInterface} from '@/interface/mock-dataInterface';
import {getAllEvents, getFilteredEvents} from '@/helpers/api-util';
import Head from 'next/head';

const FilteredEventsPage = (props: any) => {
  // if (props.filteredEvents.length === 0) {
  //   return <p>not Found</p>;
  // }
  return (
    <div>
      <Head>
        <title>event Date</title>
        <meta
          name='description'
          content='Check events around your neighborhood'
        />
      </Head>
      <EventList items={props.filteredEvents} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {params} = context;
  const filterData = params?.slug;
  if (!filterData) {
    return <p>Loading</p>;
  } else if (filterData.length >= 3) {
    return <p>bad route</p>;
  }

  const numYear = Number(filterData[0]);
  const numMonth = Number(filterData[1]);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {hasError: true},
    };
  }
  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {filteredEvents},
  };
};
export default FilteredEventsPage;
