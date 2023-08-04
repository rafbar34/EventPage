import {Fragment} from 'react';
import {Header} from './Header';
import {childrenInterface} from '@/interface/children';
export const Layout = (props: childrenInterface) => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
};
