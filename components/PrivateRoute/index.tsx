import { userSlice } from '@/store/userSlice'
import React, { useEffect } from 'react'
import Page from '../page'
import { useRouter } from 'next/router'
import TabBar from '../tabBar'

type Props = {
  children: JSX.Element | string
  className?: string
}
function PrivateRoute({ children , className }: Props) {
  const { user } = userSlice()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [])
  return (
    <Page className={className}>
      <>
        {children}
        <TabBar />
      </>
    </Page>
  )
}

export default PrivateRoute
