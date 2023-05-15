import WelcomePage from '@/contents/WelcomePage'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-purple min-h-screen'>
      <WelcomePage />
    </main>
  )
}
