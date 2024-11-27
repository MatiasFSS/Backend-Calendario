const express = require('express')
const { dbConection } = require('./database/config')
require('dotenv').config()

// console.log(process.env)

//Crear el servidor de express
const app = express()

// Base de datos
dbConection()


// Directorio publico
app.use( express.static('public') )

//Lectura y parseo del body
app.use(express.json())

//Rutas
app.use('/api/auth', require('./routes/auth'))
//TODO:CRUD:eventos

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})