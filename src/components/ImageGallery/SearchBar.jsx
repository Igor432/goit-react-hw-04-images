
import '../styles.css'


const SearchBar = ({onSubmit}) => {




return (
<header class="searchbar">
  <form class="form" onSubmit={onSubmit}>
    <button type="submit" class="button"  >
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
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