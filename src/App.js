import './App.scss';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';
import { useGetContactsQuery } from './Services/API';
import { ResetState } from './Components/ResetState';

//------------------------------------------------------------------------
const App = () => {
  const { data } = useGetContactsQuery();

  return (
    <div className="App-header">
      <h1>Phonebook</h1>
      <ContactForm />

      {data?.length === 0 ? (
        <ResetState />
      ) : (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
};

//------------------------------------------------------------------------

export default App;
