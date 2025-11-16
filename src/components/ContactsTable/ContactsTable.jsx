import React from 'react';
import './ContactsTable.css';

const ContactsTable = ({ contacts }) => {
  if (!contacts || contacts.length === 0) {
    return <div className="no-contacts">No contacts found</div>;
  }

  return (
    <div className="contacts-table">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td className="message-cell">{contact.message}</td>
              <td>{new Date(contact.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;




