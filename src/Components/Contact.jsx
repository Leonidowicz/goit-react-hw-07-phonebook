import { useDeleteContactMutation } from '../Services/API';

export const Contact = ({ id, name, number, index }) => {
  const [onDellContact, { isLoading: deleteng }] = useDeleteContactMutation();

  return (
    <li key={index}>
      {name}: {number}
      <button
        disabled={deleteng ? true : false}
        type="button"
        onClick={() => onDellContact(id)}
      >
        {deleteng ? 'Deleteng' : 'Delete'}
      </button>
    </li>
  );
};
