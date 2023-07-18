import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserModel } from '../models/User'

export const userRouter = express.Router()

userRouter.post('/api/user/login', async (req, res) => {
  const { password, email } = req.body
  try {
    const user = await UserModel.findOne({
      where: { email },
    })
    if (user === null) {
      return res.status(404).json({ message: 'Authentication failed' })
    }
    // Compare the provided password with the stored password
    const isPasswordValid = await bcrypt.compare(password, user.dataValues.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'password is invalid' })
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.dataValues.id, username: user.dataValues.username }, 'your-secret-key', {
      expiresIn: '1h',
    })
    res.status(200).json({ token, user: user.dataValues })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

userRouter.post('/api/user/signup', async (req, res) => {
  const { password, email, username } = req.body
  try {
    const existingUser = await UserModel.findOne({
      where: { email },
    })
    if (existingUser) {
      return res.status(409).json({ message: 'email already exists' })
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUer = await UserModel.create({
      email,
      password: hashedPassword,
      username,
    })

    res.status(201).json({ data: newUer.dataValues })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})
