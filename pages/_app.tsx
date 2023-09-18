import {Notifications} from '@/components/common/notifications';
import {Layout} from '@/components/layout/Layout';
import NotificationContextProvider, {
  NotificationsContext,
} from '@/store/notifications-context';
import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import {Fragment, useContext} from 'react';
import {SessionProvider} from 'next-auth/react';
import React from 'react';

import {Provider} from 'react-redux';
import { store } from '@/store/store';
export default function App({
  Component,
  pageProps: {session, ...pageProps},
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <NotificationContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NotificationContextProvider>
      </Provider>
    </SessionProvider>
  );
}
