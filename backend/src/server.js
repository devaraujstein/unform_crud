const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

//Iniciando o app
const app = express()


//Permite que eu envie dados para minha aplicação em formato json
app.use(express.json())

//Permite o acesso externo
app.use(cors())

//Iniciando o DB
mongoose.connect('mongodb://unformcrud:unformcrud1@ds151076.mlab.com:51076/crudunform',{
    useNewUrlParser : true
})

requireDir('./models')

//Rotas
app.use('/api',require('./routes'))

app.listen(3000)