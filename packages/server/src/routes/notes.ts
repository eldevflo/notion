import express from 'express'
import { createNote, getNoteById, getNotes, updateNote } from '../controllers/NotesControllers'

export const notesRouter = express.Router()
export interface PostRequest extends Express.Request {
  body: {
    blocks: {
      id: string
      type: string
      data: any
    }[]
    user: string
    title: string
  }
}

notesRouter.post('/api/notes/create', async (req: PostRequest, res) => createNote(req, res))

notesRouter.get('/api/notes', async (req, res) => {
  const { userId } = req.query
  if (!userId) {
    res.status(402).send({
      message: 'user is not provided',
    })
    return
  }
  getNotes(req.query, res)
})
notesRouter.get('/api/note/id', async (req, res) => getNoteById(req, res))
notesRouter.post('/api/note/edit', async (req, res) => updateNote(req, res))
