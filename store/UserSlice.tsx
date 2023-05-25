import { User } from '@/types/User'
import { StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware'
export const userLocalKey = '__USER'
interface UserSlice {
  user: User | undefined
  setUser(user: User): void
}
export const userSlice = create(
  persist<UserSlice>(
    (set) => ({
      user: undefined,
      setUser: (user: User) => {
        set({ user })
      },
    }),
    {
      name: userLocalKey,
    },
  ),
)
