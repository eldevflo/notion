import Toast from '@/components/Toast'
import { ToastContext } from '@/context'
import { ToastProvider } from '@/context/ToastContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useContext, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const toast = useContext(ToastContext)

  return (
    <ToastProvider>
      <>
        <Toast />
        <Component {...pageProps} />
      </>
    </ToastProvider>
  )
}
