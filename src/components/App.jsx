import { AddContact } from './AddContact/AddContact';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div style={{ width: 400 }}>
      <AddContact />

      <Filter />

      <ContactList />
    </div>
  );
};
