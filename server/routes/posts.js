import express from 'express'
import { getMessage, createMessage } from '../controllers/posts.js'

const route = express.Router()

route.get('/', getMessage)
route.post('/', createMessage)

export default route