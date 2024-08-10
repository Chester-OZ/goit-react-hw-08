import { FaUser } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import css from './Contact.module.css'

export default function Contact({ name, number, id, deleteContact }) {
  return (
    <li className={css.item}>
      <div className={css.contact}>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <FaPhone />
          {number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  )
}
