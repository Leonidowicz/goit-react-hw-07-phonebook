import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../Services/API';
import { Contact } from './Contact';
//------------------------------------------------------------------------

const filteredContacts = (items, filter) => {
  return items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};

//------------------------------------------------------------------------

const ContactList = () => {
  const { data: contacts } = useGetContactsQuery();
  console.log('~ contacts', contacts);

  const filt = useSelector((state) => state.filt);

  return (
    <>
      {contacts && (
        <ul>
          {filteredContacts(contacts, filt).map(
            ({ id, name, number }, index) => (
              <Contact index={index} id={id} name={name} number={number} />
            )
          )}
        </ul>
      )}
    </>
  );
};

//------------------------------------------------------------------------

export default ContactList;
