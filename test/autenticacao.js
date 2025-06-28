const axios = require('axios');

const Api = axios.create({
    baseURL: 'http://localhost:3000/'
});

async function getToken() {
    const response = await Api.post('login', {
        email: 'admin@admin.com.br',
        senha: '123456'
    });
    return response;
}

module.exports = {
    Api,
    getToken
}