import css from './SearchBox.module.css'

export default function SearchBox({ currentInput, onFilter }) {
  return (
    <div className={css.container}>
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
