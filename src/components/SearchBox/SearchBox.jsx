import css from './SearchBox.module.css'
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice'

export default function SearchBox() {
  const currentInput = useSelector(selectNameFilter)
  const dispatch = useDispatch()

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
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  )
}
