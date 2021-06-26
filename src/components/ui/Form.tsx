import styles from '../../css/Form.module.css'
import { useForm } from '../hooks/UseForm'
export const Form = () => {
  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
    passwordconfirmation: ''
  })
  const { email, password, passwordconfirmation } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('trying to login', email, password, passwordconfirmation)
    window.localStorage.setItem('email', JSON.stringify(email))
    window.localStorage.setItem('password', JSON.stringify(password))
  }
  return (
    <section>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Email address
          <input
            required
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            required
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </label>
        <label className={styles.label}>
          Confirm Password
          <input
            required
            className={styles.input}
            type="password"
            name="passwordconfirmation"
            value={passwordconfirmation}
            onChange={handleInputChange}
          />
        </label>
        <button className={styles.button}>Signup</button>
      </form>
    </section>
  )
}
