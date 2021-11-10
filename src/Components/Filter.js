import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../Redux/Form/form-actions';

//------------------------------------------------------------------------

const Filter = () => {
  const filter = useSelector((state) => state.filt);
  const dispatch = useDispatch();

  return (
    <label>
      Find phone number by name
      <input
        name="filter"
        type="text"
        value={filter}
        onChange={(e) => dispatch(actions.filt(e.target.value))}
      />
    </label>
  );
};

//------------------------------------------------------------------------

export default Filter;
