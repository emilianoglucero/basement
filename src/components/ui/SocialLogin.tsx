import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import styles from '../../css/SocialLogin.module.css'
faFacebook
export const SocialLogin = () => {
  return (
    <section className={styles.wrapper}>
      <p>Continue with a provider</p>
      <div className={styles['buttons-wrapper']}>
        <button className={styles.button} aria-label="Facebook signup">
          <FontAwesomeIcon icon={faFacebook} />
        </button>
        <button className={styles.button} aria-label="Twitter signup">
          <FontAwesomeIcon icon={faTwitter} />
        </button>
        <button className={styles.button} aria-label="Github signup">
          <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
    </section>
  )
}
