require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

// db connection
mongoose.connect(process.env.DATABASE_URL,
    {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())
app.use(cors())

const usersRouter = require('./routes/user')
app.use('/auth', usersRouter)


app.listen(4000, () => console.log('server started'))
