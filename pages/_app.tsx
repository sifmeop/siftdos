import type { AppProps } from 'next/app'
import Layout from '../app/components/Layout/Layout'
import '../app/assets/global/globals.scss'
import '../app/assets/global/variables.scss'
import { Provider } from 'react-redux'
import { persistor, store } from '../app/store/store'
import { PersistGate } from 'redux-persist/integration/react'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default App
