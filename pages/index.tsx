import WelcomePage from '@/contents/WelcomePage'
import { userSlice } from '@/store/UserSlice'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user } = userSlice()
  const router = useRouter()
  if (user) {
    router.push('/dashboard')
  }
  return (
    <main className='bg-purple min-h-screen'>
      <WelcomePage />
    </main>
  )
}
