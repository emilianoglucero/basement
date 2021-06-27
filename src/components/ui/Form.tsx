import { useEmailValidation } from 'components/hooks/useEmailValidation'
import { usePasswordValidation } from 'components/hooks/usePasswordValidation'
import { useState } from 'react'
import styles from '../../css/Form.module.css'

export const Form = () => {
  const [password, setPassword] = useState({
    firstPassword: '',
    secondPassword: ''
  })
  const [email, setEmail] = useState({
    userEmail: ''
  })

  const [
    validPasswordLength,
    hasNumber,
    upperCase,
    lowerCase,
    match,
    firstPassword,
    secondPassword
  ] = usePasswordValidation({
    firstPassword: password.firstPassword,
    secondPassword: password.secondPassword
  })
  const [validEmail, validEmailLength, userEmail] = useEmailValidation({
    userEmail: email.userEmail
  })

  const setFirst = (event) => {
    setPassword({ ...password, firstPassword: event.target.value })
  }
  const setSecond = (event) => {
    setPassword({ ...password, secondPassword: event.target.value })
  }
  const setUserEmail = (event) => {
    setEmail({ ...email, userEmail: event.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('trying to login', userEmail, firstPassword, secondPassword)
    if (isFormValid()) {
      window.localStorage.setItem('email', JSON.stringify(userEmail))
      window.localStorage.setItem('password', JSON.stringify(firstPassword))
    }
  }

  const isFormValid = () => {
    if (!validEmail) {
      console.log('You must type a valid Email')
      return false
    }
    if (!validEmailLength) {
      console.log('Your Email is too long. Must be 64 chars or less')
      return false
    }
    if (!validPasswordLength) {
      console.log('Your password is too short. Must be 6 chars or more')
      return false
    }
    if (!hasNumber) {
      console.log('Your password must include 1 number')
      return false
    }
    if (!upperCase) {
      console.log('Your password must include 1 uppercase char')
      return false
    }
    if (!lowerCase) {
      console.log('Your password must include 1 lowercase char')
      return false
    }
    if (!match) {
      console.log('Your passwords does not match')
      return false
    }

    return true
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
            // value={email}
            onChange={setUserEmail}
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            required
            className={styles.input}
            type="password"
            name="password"
            // value={password}
            // onChange={handleInputChange}
            onChange={setFirst}
          />
        </label>
        <label className={styles.label}>
          Confirm Password
          <input
            required
            className={styles.input}
            type="password"
            name="passwordconfirmation"
            // value={passwordconfirmation}
            // onChange={handleInputChange}
            onChange={setSecond}
          />
        </label>
        <div>
          {/* <ul>
            <li>
              Valid Length:{' '}
              {validPasswordLength ? <span>True</span> : <span>False</span>}
            </li>
            <li>
              Has a Number: {hasNumber ? <span>True</span> : <span>False</span>}
            </li>
            <li>
              UpperCase: {upperCase ? <span>True</span> : <span>False</span>}
            </li>
            <li>
              LowerCase: {lowerCase ? <span>True</span> : <span>False</span>}
            </li>
            <li>Match: {match ? <span>True</span> : <span>False</span>}</li>
            <li>
              Valid Email: {validEmail ? <span>True</span> : <span>False</span>}
            </li>
            <li>
              Valid Email Length:{' '}
              {validEmailLength ? <span>True</span> : <span>False</span>}
            </li>
          </ul> */}
        </div>
        <button className={styles.button}>Signup</button>
      </form>
    </section>
  )
}
