import './App.css'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'
import { RiContactsBook3Fill } from 'react-icons/ri'
import { useEffect, useState } from 'react'

export default function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]

  const getContactsLS = () => {
    const savedContacts = localStorage.getItem('savedContact')
    return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts
  }

  const [contactList, setContactList] = useState(getContactsLS)
  const [filter, setFilter] = useState('')

  const filterContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )

  const addContact = (newContact) => {
    setContactList((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }

  const deleteContact = (contactId) => {
    setContactList((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    )
  }

  useEffect(() => {
    localStorage.setItem('savedContact', JSON.stringify(contactList))
  }, [contactList])

  return (
    <div className="app">
      <h1 className="title">
        <RiContactsBook3Fill /> Phonebook
      </h1>
      <ContactForm addContact={addContact} />
      <SearchBox currentInput={filter} onFilter={setFilter} />
      <ContactList contact={filterContacts} deleteContact={deleteContact} />
    </div>
  )
}
