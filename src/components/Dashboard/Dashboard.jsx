import React, { useState, useEffect } from 'react';
import { fetchAuthSession } from 'aws-amplify/auth';
import axios from 'axios';
import ContactsTable from '../ContactsTable/ContactsTable';
import './Dashboard.css';

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const session = await fetchAuthSession();
      const token = session.tokens?.idToken?.toString();
      
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/contacts`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      setContacts(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Contacts</h3>
          <p>{contacts.length}</p>
        </div>
      </div>
      <ContactsTable contacts={contacts} />
    </div>
  );
};

export default Dashboard;



