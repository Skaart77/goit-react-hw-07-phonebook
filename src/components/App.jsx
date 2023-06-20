import Form from './Form/form';
import ContactList from './Contacts/contacts';
import Filter from './Filter/filter';
import { Selector } from '../redux';
import { useSelector } from 'react-redux';

function App() {
  const loading = useSelector(Selector.getLoading);

  return (
    <section className="section">
      <h1 className="text-title">Phonebook</h1>
      <Form />
      <h2 className="text-title">Contacts</h2>
      <Filter />
      {loading && <h1>Loading...</h1>}
      <ContactList />
    </section>
  );
}
export default App;
