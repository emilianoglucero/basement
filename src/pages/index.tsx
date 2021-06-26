import PageLayout from 'components/layout/page'
import { Form } from 'components/ui/Form'
import { Header } from 'components/ui/header/Header'
import { SignUpImage } from 'components/ui/SignUpImage'
import { SocialLogin } from 'components/ui/SocialLogin'
import styles from '../css/index.module.css'
import { SeparatorLabel } from '../components/ui/SeparatorLabel'

const HomePage = () => {
  return (
    <PageLayout>
      <div className={styles['text-wrapper']}>
        <Header />
        <SocialLogin />
        <SeparatorLabel />
        <Form />
      </div>
      <div className={styles['image-wrapper']}>
        <SignUpImage />
      </div>
    </PageLayout>
  )
}

export default HomePage
