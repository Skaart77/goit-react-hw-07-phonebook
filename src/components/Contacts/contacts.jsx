import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Operation, Selector } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { TbTrashXFilled, TbUser } from 'react-icons/tb';

function ContactList() {
  const contacts = useSelector(Selector.getFilterContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Operation.fetchContacts());
  }, [dispatch]);
  return (
    <ul className="contact">
      {contacts.map(({ id, name, number }) => (
        <li className="contact-item" key={id}>
          <TbUser size={20} color="black" />
          <span>{` ${name}: ${number}`}</span>
          <button
            className="contact-button "
            type="button"
            onClick={() => dispatch(Operation.deleteContact(id))}
          >
            <TbTrashXFilled size={15} color="red" />
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
