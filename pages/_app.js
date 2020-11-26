import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
