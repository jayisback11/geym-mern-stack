import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import postsRoute from './routes/posts.js'

const app = express()
dotenv.config()


app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/posts', postsRoute)

const PORT = process.env.PORT || 5000
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch(error => console.log(error.message))

mongoose.set('useFindAndModify', false)

