import { useState } from 'react';
import { Operation, Selector } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(Selector.getContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  // Викликається під час відправлення форми
  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    )
      if (contacts.find(contact => contact.name === name)) {
        alert(`${name} is already in contacts`);
        return;
      }
    if (contacts.find(contact => contact.number === number)) {
      alert(`Number ${number} already exists`);
      return;
    } else {
      dispatch(Operation.addContact({ name, number }));
      setName('');
      setNumber('');
    }
  };
  //Очистка форми

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label">
          Name
          <input
            className="form-input"
            placeholder="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label className="form-label">
          Number
          <input
            className="form-input"
            placeholder="Number"
            type="tel"
            name="number"
            pattern="(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
          />
        </label>
        <button className="form-button" type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}

export default Form;
