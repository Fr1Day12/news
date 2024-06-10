import styles from "./styles.module.css";

const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        onChange={(e) => {
          setKeywords(e.target.value);
        }}
        value={keywords}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
