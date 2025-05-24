const express = require('express');
const UsuariosRoute = require('./src/routes/UsuariosRoute.js');
const app = express()
app.use(express.json()) // Autorizando o Uso de request.body

app.get('/', (request, response) => {
    return response.send("Servidor Online com NodeJS + Express!")
})

app.use(UsuariosRoute)

app.listen(3000, () => {
    console.log("Servidor executando na porta 3000");
})