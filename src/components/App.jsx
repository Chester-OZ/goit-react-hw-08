import './App.css'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'
import { RiContactsBook3Fill } from 'react-icons/ri'

export default function App() {
  return (
    <div className="app">
      <h1 className="title">
        <RiContactsBook3Fill /> Phonebook
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}
