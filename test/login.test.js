const axios = require('axios');
const { getToken } = require('./autenticacao.js');

test('Autenticação', async () => {
    const response = await getToken();
    expect(response.status).toBe(200);
})