import { useEffect } from 'react'
import Head from 'next/head'
import Header from '../Components/Header/Header'
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'

import Router from 'next/router'
import NProgress from 'nprogress'
import npcss from 'nprogress/nprogress.css'

import '../styles/globals.css'

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  NProgress.configure({ showSpinner: false, minimum: 0.1, trickleSpeed: 150, trickleRate: 0.1 })
  const startNProgress = () => NProgress.start()
  const stopNProgress = () => NProgress.done()
  useEffect(() => {
    Router.events.on("routeChangeStart", startNProgress)
    Router.events.on("routeChangeComplete", stopNProgress)
    Router.events.on("routeChangeError", stopNProgress)
    return () => {
      Router.events.on("routeChangeStart", startNProgress)
      Router.events.on("routeChangeComplete", stopNProgress)
      Router.events.on("routeChangeError", stopNProgress)
    }
  })

  return (
    <>
      <Head>
        <title>Fakeshop</title>
      </Head>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default App
