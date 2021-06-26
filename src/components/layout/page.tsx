import Head from 'next/head'
import Container, { ContainerProps } from './container'
import styles from '../../css/PageLayout.module.css'
type Props = {
  children?: React.ReactNode
  contain?: boolean | ContainerProps

  // TODO after implementing head, header, footer
  // headProps: HeadProps
  // headerProps: HeaderProps
  // footerProps: FooterProps
}

const PageLayout = ({ children, contain }: Props) => {
  return (
    <>
      <Head>
        <title>frontend-challenge | basement.studio</title>
        {/* TODO Head */}
      </Head>
      {/* TODO Header */}
      {/* <Header /> */}
      <main className={styles.wrapper}>
        {contain ? <Container {...contain}>{children}</Container> : children}
      </main>
      {/* TODO Footer */}
      {/* <Footer /> */}
    </>
  )
}

export default PageLayout
