const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const routes = require('./routes')
const path = require('path')

const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
)

app.use(routes)

app.listen(3333)

