import '../styles/globals.css'
import { ItForumProvider } from '../context/ItForumContext'

function MyApp({ Component, pageProps }) {
  return (
  <ItForumProvider>
    <Component {...pageProps} />
  </ItForumProvider>
  )
}

export default MyApp
