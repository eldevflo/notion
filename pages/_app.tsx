import Toast from '@/components/Ui/toast'
import { ToastProvider } from '@/context/ToastContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <div className="relative">
        <Toast />
        <Component {...pageProps} />
      </div>
    </ToastProvider>
  )
}
