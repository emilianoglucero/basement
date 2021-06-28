import Image from 'next/image'
import styles from '../../../css/Header.module.css'
export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Image
        src="/images/basegit-logo.png"
        alt="BaseGit logo"
        width={49.5}
        height={45}
      />
      <h1 className={styles.title}>Sign up to BaseGit</h1>
      <h2 className={styles['sub-title']}>
        BaseGit is the best way to store more information.
      </h2>
    </header>
  )
}
