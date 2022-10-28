import { useSelector, useDispatch } from 'react-redux';
import {
  selectedContacts,
  removeContact,
  selectedFilter,
} from 'redux/contactSlice';
import {
  List,
  ContactCard,
  Name,
  Number,
  DeleteBtn,
} from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = () => {
  const contacts = useSelector(selectedContacts);
  const filter = useSelector(selectedFilter);
  const dispatch = useDispatch();

  const filteredContactList = () => {
    const normilizedValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedValue)
    );
  };

  return (
    <List>
      {filteredContactList().map(({ name, id, number }) => {
        return (
          <ContactCard key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <DeleteBtn
              type="button"
              id={id}
              onClick={() => dispatch(removeContact(id))}
            >
              Delete
            </DeleteBtn>
          </ContactCard>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;