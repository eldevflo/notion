import { port } from '@/server/src/constants'
import axios from 'axios'

export const request = axios.create({
  baseURL: `http://localhost:${port}`,
})
