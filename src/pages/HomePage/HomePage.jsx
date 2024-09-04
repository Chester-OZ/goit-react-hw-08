import css from './HomePage.module.css'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors'

export default function HomePage() {
  const user = useSelector(selectUser)
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <div className={css.home}>
      {isLoggedIn ? (
        <p>Welcome, {user.name}! This is your personal contact book.</p>
      ) : (
        <p className={css.message}>
          Welcome to the contact book! <br></br>To continue, please sign in to
          your account or register.
        </p>
      )}
    </div>
  )
}
