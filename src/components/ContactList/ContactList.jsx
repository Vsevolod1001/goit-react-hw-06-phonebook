import s from './ContactList.module.css';
export const ContactList = ({ setContacts, contacts }) => {
  const hendleDelete = id => {
    setContacts([...contacts].filter(us => us.id !== id));
  };
  return (
    <div>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.listCounterCircle}>
          <p className={s.listCircle}>
            {name}: {number}
          </p>

          <button
            type="button"
            className={s.BtnInput}
            onClick={() => hendleDelete(id)}
          >
            delete
          </button>
        </li>
      ))}
    </div>
  );
};
