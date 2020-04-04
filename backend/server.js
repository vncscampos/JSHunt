const express = require('express')
const requireDir = require('require-dir')
const cors = require('cors')

// Iniciando o App
const app = express()
app.use(express.json())
app.use(cors()) //permite q outros endereços acesse a API

// Iniciando o DB
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true})
requireDir('./src/models')


// Primeira Rota
app.use('/api', require('./src/routes'))

app.listen(3000)
