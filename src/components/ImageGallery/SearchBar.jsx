
import '../styles.css'


const SearchBar = ({onSubmit}) => {




return (
<header class="Searchbar">
  <form class="SearchForm" onSubmit={onSubmit}>
    <button type="submit" class="SearchForm-button" >
      <span class='SearchForm-button-label'>
      </span>
    </button>

    <input
      class="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    name='search'
    />
  </form>
</header>

)


}

export default SearchBar