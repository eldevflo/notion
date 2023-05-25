import express from 'express'
import { client } from '../config/dbConfig'
import { dbName } from '../constants'
export const userRouter = express.Router()

userRouter.post('/login', async (req, res) => {
  try {
    const { password, email } = req.body
    await client.connect()
    const database = client.db(dbName)
    const users = database.collection('users')
    const user = await users.findOne({ email, password })
    if (user) {
      res.send({
        ...user,
        id: user._id,
      })
    } else {
      res.send(null)
    }
  } finally {
    client.close()
  }
})
