import { Context, createContext, useState } from 'react'

interface ToastContextType {
  show: ({ type, message }: ToastType) => void
  toast: ToastType | undefined
}
interface ToastType {
  type: 'info' | 'warning' | 'error' | 'success'
  message: string
}
interface Props {
  children: JSX.Element | string
}
export const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider = ({ children }: Props) => {
  const [toast, setToast] = useState<ToastType>()
  const show = (toast: ToastType) => {
    const { type, message } = toast
    setToast(toast)
    setTimeout(() => {
      remove()
    }, 6000)
  }
  const remove = () => {
    setToast(undefined)
  }
  return <ToastContext.Provider value={{ show, toast }}>{children}</ToastContext.Provider>
}
