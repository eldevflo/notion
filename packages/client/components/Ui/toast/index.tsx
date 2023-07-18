import { ToastContext } from '@/context'
import React, { useContext } from 'react'

export interface ToastProps {
  type: 'info' | 'warning' | 'error' | 'success'
  message: string
}
function Toast() {
  const toast = useContext(ToastContext)
  if (!toast) return <div></div>
  const { type, message } = toast.toast || {
    type: '',
    message: '',
  }
  return (
    <div className='absolute my-3 right-12 top-0  h-5 z-50 rounded-full min-w-[300px]'>
      {type === 'info' && (
        <div className='flex p-4 mb-4 text-sm text-white bg-info rounded' role='alert'>
          <svg
            aria-hidden='true'
            className='flex-shrink-0 inline w-5 h-5 mr-3'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span className='sr-only'>Info</span>
          <div>
            <span className='font-medium'>Info alert!</span> {message}
          </div>
        </div>
      )}
      {type === 'error' && (
        <div className='flex p-4 text-sm text-white bg-error rounded' role='alert'>
          <svg
            aria-hidden='true'
            className='flex-shrink-0 inline w-5 h-5 mr-3'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span className='sr-only'>Info</span>
          <div>{message}</div>
        </div>
      )}
      {type === 'success' && (
        <div className='flex p-4  text-sm text-white bg-green rounded' role='alert'>
          <svg
            aria-hidden='true'
            className='flex-shrink-0 inline w-5 h-5 mr-3'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span className='sr-only'>Info</span>
          <div>
            <span className='font-medium'>Success alert!</span> {message}
          </div>
        </div>
      )}
      {type === 'warning' && (
        <div className='flex p-4 mb-4 text-sm text-white bg-warning rounded' role='alert'>
          <svg
            aria-hidden='true'
            className='flex-shrink-0 inline w-5 h-5 mr-3'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span className='sr-only'>warning</span>
          <div>{message}</div>
        </div>
      )}
    </div>
  )
}

export default Toast
