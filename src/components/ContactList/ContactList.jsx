import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

export default function ContactList({ contact, deleteContact }) {
  return (
    <ul className={css.list}>
      {contact.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  )
}
