/* eslint-disable react/no-unescaped-entities */
import Form from '@/components/Form'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const router = useRouter()
  const onChangeInput = (key: 'email' | 'password', e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    const value = target.value
    const data = formData
    data[key] = value
    setFormData(data)
  }
  const loginUser = async (e: Event) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8000/login', formData)
      if (res.data.validate) {
        router.push('/dashboard')
        return
      }
      console.log('Oops! it looks like you have entered the wrong information. Please try again..')
    } catch (error) {
      console.log(error)
    }
  }
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
        onSubmit={loginUser}
      />
    </div>
  )
}

export default Login
