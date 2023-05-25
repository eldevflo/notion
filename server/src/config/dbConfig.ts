import { MongoClient } from 'mongodb'

const uri = 'mongodb+srv://Elena:fzmnpr@cluster0.naxjlk1.mongodb.net/?retryWrites=true&w=majority'
export const client = new MongoClient(uri)
