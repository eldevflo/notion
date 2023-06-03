import React from 'react'
import HomeIcon from '../icons/HomeIcon'
import SearchIcon from '../icons/SearchIcon'
import SettingIcon from '../icons/SettingIcon'
import { useRouter } from 'next/router'
import Link from 'next/link'

function TabBar() {
  const router = useRouter()

  return (
    <div className='fixed bottom-0 w-full bg-white min-h-[84px] flex border-t border-gray'>
      <div className='flex justify-between w-full max-w-[500px] m-auto h-full p-3 '>
        <div className='flex'>
          <Link href='/dashboard' className='flex items-center flex-col mr-8'>
            <HomeIcon selected={router.pathname === 'dashboard'} />
            <span className={`${router.pathname === 'dashboard' ? 'text-purple' : ''}`}>Home</span>
          </Link>
          <button className='flex items-center flex-col'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke={`${router.pathname === 'finished' ? '#6A3EA1' : 'currentColor'}`}
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12'
              />
            </svg>
            <span className={`${router.pathname === 'finished' ? 'text-purple' : ''}`}>Finished</span>
          </button>
        </div>
        {/* plus icon  */}
        <button className='w-14 h-14 bg-purple flex items-center justify-center rounded-full absolute -top-[60%] right-[50%] translate-y-[50%] translate-x-[50%]' onClick={() => router.push('/notes/new')}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='white'
            className='w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
          </svg>
        </button>
        <div className='flex'>
          <button className='flex items-center flex-col mr-8'>
            <SearchIcon selected={router.pathname === 'search'} />
            <span className={`${router.pathname === 'search' ? 'text-purple' : ''}`}>Search</span>
          </button>
          <button className='flex items-center flex-col'>
            <SettingIcon selected={router.pathname === 'settings'} />
            <span className={`${router.pathname === 'settings' ? 'text-purple' : ''}`}>Settings</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TabBar
