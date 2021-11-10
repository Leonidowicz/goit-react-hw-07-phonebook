import { useAddContactMutation } from '../Services/API';

export const ResetState = () => {
  const [addContact] = useAddContactMutation();
  const contacts = [
    { name: 'Name1', number: '+38 066 1234561' },
    { name: 'Name2', number: '+38 066 1234562' },
    { name: 'Name3', number: '+38 066 1234563' },
    { name: 'Name4', number: '+38 066 1234564' },
  ];
  const reset = (arr, fn) => {
    arr.forEach((obj) => fn(obj));
  };

  return (
    <button type="button" onClick={() => reset(contacts, addContact)}>
      Reset State
    </button>
  );
};
