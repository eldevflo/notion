/* eslint-disable react/no-unescaped-entities */
import Form from '@/components/Form'
import React, { useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const onChangeInput = (key: 'email' | 'password', e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    const value = target.value
    const data = formData
    data[key] = value
    setFormData(data)
  }
  const { user, error, isLoading } = useUser()

  return (
    <div className='p-4 grid place-content-center min-h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Let's Login</h1>
      <div className='text-base font-regular text-dark-gray'>And notes your idea</div>
      <Form
        inputs={[
          {
            label: 'Email Address',
            placeholder: 'Example: johndoe@gmail.com',
            value: formData.email,
            onChange: (e) => onChangeInput('email', e),
          },
          {
            label: 'password',
            placeholder: '**********',
            type: 'password',
            value: formData.password,
            onChange: (e) => onChangeInput('password', e),
          },
        ]}
        action='Login'
        onSubmit={() => console.log('het')}
      />
    </div>
  )
}

export default Login
