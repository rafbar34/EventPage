import {createContext, useEffect, useState} from 'react';

export const NotificationsContext = createContext({
  notification: null,
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();
  const showNotification = (notificationData) => {
    setActiveNotification(notificationData);
  };
  const hideNotification = () => {
    setActiveNotification(null);
  };
  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === 'send' ||
        activeNotification.status === 'error')
    ) {
      const timer = setTimeout(() => {
        hideNotification();
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);
  const context = {
    notifications: activeNotification,
    showNotification,
    hideNotification,
  };

  return (
    <NotificationsContext.Provider value={context}>
      {props.children}
    </NotificationsContext.Provider>
  );
}

export default NotificationContextProvider;
