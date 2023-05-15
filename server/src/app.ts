import express, { Request, Response } from 'express'
import cors from 'cors'
import { verbose, Database } from 'sqlite3'
const app = express()
const port = 8000
const sqlite = app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})
//body purser
app.use(express.json({ limit: '10mb' }))

let db = new Database('credentials.db', (error) => {
  if (error) {
    console.error(error.message)
  }
  console.log('connected to database')
})
app.post('/login', (req, res) => {
  const { username, password, email } = req.body
  db.all(`select * from credentials where email = '${email}' and password = '${password}'`, (error, rows) => {
    if (error) {
      throw error
    }
    if (rows.length) {
      res.send({ validate: true })
    } else {
      res.send({ validate: false })
    }
  })
})
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)

  // db.all(
  //   'CREATE TABLE credentials (username TEXT NOT NULL, password TEXT NOT NULL, email TEXT NOT NULL)',
  //   (error, rows) => {
  //     if (error) {
  //       throw error
  //     }
  //   },
  // )
  // db.all(
  //   `INSERT INTO credentials(username , password, email) VALUES ('elena', '1234','f.zamanipour@gmail.com')`,
  //   (error, rows) => {
  //     if (error) {
  //       throw error
  //     }
  //   },
  // )
  db.all(`select * from credentials`, (error, rows) => {
    if (error) {
      throw error
    }
    console.log(rows)
  })
})
