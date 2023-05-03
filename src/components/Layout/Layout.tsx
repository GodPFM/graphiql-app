import React from 'react';
import Header from '../Header/Header';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: IProps) => (
  <div className="flex min-h-screen flex-col p-0">
    <Header />
    <main className="grow">{children}</main>
    <footer>
      <p>Footer</p>
    </footer>
  </div>
);

export default Layout;
