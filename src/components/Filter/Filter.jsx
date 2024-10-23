import styles from './filter.module.css'
export const Filter = ({ filter, Searchquery }) => {
  return (
      <div className={styles.filterblock}>
          <label>Find contacts by name</label>
      <input type="text" name="name" value={filter} onChange={Searchquery}></input>
    </div>
  );
};
