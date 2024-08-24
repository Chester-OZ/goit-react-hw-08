import css from './SearchBox.module.css'
import { FaSearch } from 'react-icons/fa'

export default function SearchBox({ currentInput, onFilter }) {
  return (
    <div className={css.container}>
      <div className={css.faSearch}>
        <FaSearch />
      </div>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input
        id="searchBox"
        type="text"
        placeholder="Search contacts"
        value={currentInput}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  )
}
