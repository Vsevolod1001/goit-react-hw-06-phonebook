import s from './Filter.module.css';
export const Filter = ({ filter, setFilter }) => {
  return (
    <div className={s.FilterDiv}>
      <label>
        Find contacts by name
        <input
          type="text"
          className={s.Inpfilter}
          onChange={e => setFilter(e.currentTarget.value)}
          value={filter}
          placeholder="Search.."
        />
      </label>
    </div>
  );
};
