import '../styles/globals.css'

const URL = process.env.URL || "/";

function MyApp({ Component, pageProps }) {
  return <Component className="dark bg-gray-700" {...pageProps} />
}

export default MyApp
