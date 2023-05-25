import express, { Request, Response } from 'express'
import cors from 'cors'
import { verbose, Database } from 'sqlite3'
import { MongoClient } from 'mongodb'
const uri = 'mongodb+srv://Elena:fzmnpr@cluster0.naxjlk1.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri)

const app = express()
const port = 8000

async function run() {
  try {
    await client.connect()
    console.log('connected to database')
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})
app.use(cors())
//body purser
app.use(express.json({ limit: '10mb' }))

app.post('/login', async (req, res) => {
  try {
    const { password, email } = req.body
    await client.connect()
    const database = client.db('Notion')
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
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  run()
})
