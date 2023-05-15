import WelcomePage from '@/contents/WelcomePage'
import { Inter } from 'next/font/google'
import { useUser } from '@auth0/nextjs-auth0/client'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user, isLoading, error } = useUser()
  console.log({ user, isLoading, error })

  return (
    <main className='bg-purple min-h-screen'>
      <WelcomePage />
    </main>
  )
}
