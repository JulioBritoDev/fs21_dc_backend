const express = require('express');
const asyncMigrations = require('./src/database/migration.js')
const UsuariosRoute = require('./src/routes/UsuariosRoute.js');
const AutoresRoute = require('./src/routes/AutoresRoute.js');
const EditoresRoute = require('./src/routes/EditoresRoute.js');
const LivrosRoute = require('./src/routes/LivrosRoute.js');

const { default: axios } = require('axios');

const app = express()
app.use(express.json()) // Autorizando o Uso de request.body

// Migrations
asyncMigrations()

app.get('/ws/:cep/:formato', async (request, response) => {
    const cep = request.params.cep;
    const formato = request.params.formato;  
    const dados = await axios.get(`https://viacep.com.br/ws/${cep}/${formato}`);
    // CepModel.create(dados);
    if(formato == 'json') {
        return response.json(dados.data)
    } else if(formato == 'xml') {
        return response.end(dados.data);
    } else {
        return response.status(400).end(`
            <h1 style='text-align: center'>Http 400</h1>
            <h2 style='text-align: center'>Verifique a URL</h2>
            <h2 style='text-align: center'>{Bad Request}</h2>
        `);
    }   
})

app.get('/', (request, response) => {
    return response.send("Servidor Online com NodeJS + Express!")
})

app.use(UsuariosRoute)
app.use(AutoresRoute)
app.use(EditoresRoute)
app.use(LivrosRoute)

app.listen(3000, () => {
    console.log("Servidor executando na porta 3000");
})