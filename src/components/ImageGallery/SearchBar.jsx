import styles from '../images.module.css';
import PropTypes from 'prop-types'; // ES6

const SearchBar = ({keyWord, onSubmit, onChange }) => {
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={styles.SearchForm_button}>
          <span className={styles.SearchForm_button_label}/>
        </button>

        <input
          className={styles.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          onChange={onChange}
          value={keyWord}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchBar;
