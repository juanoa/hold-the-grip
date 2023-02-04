import { ThemeProvider } from 'theme-ui'
import { roboto } from '@theme-ui/presets'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={roboto}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
