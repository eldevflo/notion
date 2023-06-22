import Toast from '@/components/Ui/toast'
import { ToastContext } from '@/context'
import { ToastProvider } from '@/context/ToastContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import * as notifier from "codex-notifier";

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
