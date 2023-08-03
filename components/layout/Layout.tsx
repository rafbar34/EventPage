import {Fragment} from 'react';
import {Header} from './header';
export const Layout = (props) => {
  return (
    <Fragment>
      <header>
        <Header/>
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
};
