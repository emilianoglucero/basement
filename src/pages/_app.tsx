import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import 'css/global.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        title="BaseGit"
        description="BaseGit challenge for Basement Studio."
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://basement-challenge-emilianoglucero.vercel.app/',
          site_name: 'BaseGit',
          description: 'BaseGit challenge for Basement Studio'
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
