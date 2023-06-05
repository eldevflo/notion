import WelcomePage from '@/contents/WelcomePage'
import { userSlice } from '@/store/userSlice'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const { user } = userSlice()
  const router = useRouter()
 useEffect(() => {
    if (user) {
    router.push('/dashboard')
  }
 }, [])
 
  return (
    <main className='bg-purple min-h-screen'>
      <WelcomePage />
    </main>
  )
}
