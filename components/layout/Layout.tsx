import {Fragment, useContext, useEffect, useState} from 'react';
import {Header} from './Header';
import {childrenInterface} from '@/interface/children';
import {NotificationsContext} from '@/store/notifications-context';
import { Notifications } from '../common/notifications';
export const Layout = (props: childrenInterface) => {
  const [fetchFN, setFetchNF] = useState()
  const notificationCtx = useContext(NotificationsContext);
  const activeNotfication = notificationCtx.notifications;
useEffect(()=>{
  setFetchNF(activeNotfication)
},[activeNotfication])
  return (
    <Fragment>
      <header>
        <Header />
      </header>

        {fetchFN && (
          <Notifications
            text={fetchFN.text}
            status={fetchFN.status}
            title={fetchFN.title}
          />
        )}
        <main>{props.children}</main>
    </Fragment>
  );
};
