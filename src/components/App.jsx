import { useState } from 'react';
import { AddContact } from './AddContact/AddContact';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  return (
    <div style={{ width: 400 }}>
      <AddContact />

      <Filter filter={filter} setFilter={setFilter} />

      <ContactList setContacts={setContacts} />
    </div>
  );
};
