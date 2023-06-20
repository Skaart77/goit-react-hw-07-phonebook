import { Action, Selector } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';

function Filter() {
  const filter = useSelector(Selector.getFilter);
  const dispatch = useDispatch();
  return (
    <label className="filter">
      Find contacts by name
      <input
        className="filter-input"
        type="text"
        value={filter}
        onChange={e => dispatch(Action.setFilter(e.target.value))}
      />
    </label>
  );
}

export default Filter;
