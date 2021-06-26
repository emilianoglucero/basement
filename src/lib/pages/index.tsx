import PageLayout from 'components/layout/page'
import Image from 'next/image'

const HomePage = () => {
  return (
    <PageLayout>
      <main>
        <header>
          <Image src="/logo.png" alt="BaseGit logo" width={49.5} height={45} />
        </header>
        <section></section>
        <section></section>
        <section></section>
      </main>
    </PageLayout>
  )
}

export default HomePage
