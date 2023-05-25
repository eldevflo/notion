import { userSlice } from '@/store/UserSlice'
import React, { useEffect } from 'react'
import Page from '../Page'
import { useRouter } from 'next/router'

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
  })
  return <Page>{children}</Page>
}

export default PrivateRoute
