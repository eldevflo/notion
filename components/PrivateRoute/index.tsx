import { userSlice } from '@/store/UserSlice'
import { useRouter } from 'next/router'
import React from 'react'
import Page from '../Page'
type Props = {
  children: JSX.Element | string
}
function PrivateRoute({ children }: Props) {
  const { user } = userSlice()
  const router = useRouter()
  if (!user) {
    router.push('/login')
  }
  return <Page>{children}</Page>
}

export default PrivateRoute
