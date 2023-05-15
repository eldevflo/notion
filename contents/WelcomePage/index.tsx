import Image from 'next/image'
import React from 'react'
import image from '@/assets/images/welcome.png'
import Button from '@/components/Button'
import { useRouter } from 'next/router'
function WelcomePage() {
  const router = useRouter()
  return (
    <div className='grid place-content-center min-h-screen justify-items-center	'>
      <Image src={image} alt='welcome' className='mb-6' />
      <p className='text-white text-lg font-bold text-center mb-8'>
        Jot Down anything you want to
        <br /> achieve, today or in the future
      </p>
      <Button
        hasLeftSideArrow
        backgroundColor='white'
        text='Let’s Get Started'
        textColor='purple'
        onClick={() => router.push('/login')}
      />
    </div>
  )
}

export default WelcomePage
