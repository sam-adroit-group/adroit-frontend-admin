import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Router>
          <Layout user={user} signOut={signOut}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Layout>
        </Router>
      )}
    </Authenticator>
  );
}

export default App;



