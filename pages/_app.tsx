import {Notifications} from '@/components/common/notifications';
import {Layout} from '@/components/layout/Layout';
import NotificationContextProvider, {
  NotificationsContext,
} from '@/store/notifications-context';
import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import {Fragment, useContext} from 'react';

export default function App({Component, pageProps}: AppProps) {
  return (
    <NotificationContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </NotificationContextProvider>
  );
}
