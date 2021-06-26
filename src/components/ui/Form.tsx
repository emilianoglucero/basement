import styles from '../../css/Form.module.css'

export const Form = () => {
  return (
    <section>
      <form className={styles.form}>
        <label className={styles.label}>
          Email address
          <input className={styles.input} type="text" name="email" />
        </label>
        <label className={styles.label}>
          Password
          <input className={styles.input} type="text" name="password" />
        </label>
        <label className={styles.label}>
          Confirm Password
          <input className={styles.input} type="text" name="password2" />
        </label>
        <button className={styles.button}>Signup</button>
      </form>
    </section>
  )
}
