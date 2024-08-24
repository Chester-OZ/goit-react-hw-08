import { FaUserNinja } from 'react-icons/fa'
import { IoIosRemoveCircle } from 'react-icons/io'
import css from './Contact.module.css'

export default function Contact({ name, number, id, deleteContact }) {
  return (
    <li className={css.item}>
      <div className={css.userIcon}>
        <FaUserNinja />
      </div>
      <div className={css.contact}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => deleteContact(id)}
      >
        <IoIosRemoveCircle />
      </button>
    </li>
  )
}
