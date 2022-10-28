import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/ContactFilter/ContactFilter';
import Phonebook from 'components/Phonebook/Phonebook';
import { useSelector } from 'react-redux';
import { selectedContacts } from 'redux/contactSlice';

const App = () => {
  const contacts = useSelector(selectedContacts);

  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />

      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p
          style={{
            fontWeight: 600,
          }}
        >
          Contact list is empty
        </p>
      )}
    </Phonebook>
  );
};

export default App;
