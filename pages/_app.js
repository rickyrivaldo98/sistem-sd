import '../styles/globals.scss'
import "@fortawesome/fontawesome-free/css/all.min.css";
function MyApp({ Component, pageProps }) {
  // if (Component.getLayout) {
  //   return Component.getLayout(<Component {...pageProps} />)
  // }
  // return <Component {...pageProps} />
  return (
    <>
      {
        Component.getLayout ? (
          <Component.getLayout>
            <Component {...pageProps} />
          </Component.getLayout>
        ) : (
          <Component {...pageProps} />
        )
      }
    </>
  )
}

export default MyApp
