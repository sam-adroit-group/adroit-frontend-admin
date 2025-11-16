import React from 'react';
import { Button } from '@aws-amplify/ui-react';
import './Layout.css';

const Layout = ({ children, user, signOut }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1>Adroit Admin Panel</h1>
        <div className="user-info">
          <span>Welcome, {user?.signInDetails?.loginId || user?.username || 'Admin'}</span>
          <Button onClick={signOut} variation="primary">Sign Out</Button>
        </div>
      </header>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;




