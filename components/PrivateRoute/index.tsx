import { userSlice } from '@/store/userSlice'
import React, { useEffect } from 'react'
import Page from '../Page'
import { useRouter } from 'next/router'
import TabBar from '../TabBar'

type Props = {
  children: JSX.Element | string
}
function PrivateRoute({ children }: Props) {
  const { user } = userSlice()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [])
  return (
    <Page>
      <>
        {children}
        <TabBar />
      </>
    </Page>
  )
}

export default PrivateRoute
