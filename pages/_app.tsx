import Toast from '@/components/Toast'
import { ToastContext } from '@/context'
import { ToastProvider } from '@/context/ToastContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <>
        <Toast />
        <Component {...pageProps} />
      </>
    </ToastProvider>
  )
}
