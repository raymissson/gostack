const express = require('express');
const { response, request } = require('express');

// aplicação criada
const app = express();

// get recebe o primeiro parâmetro, o qual quer observar 
// segundo parâmetro recebe uma função (arrow function)
app.get('/projects', (request, response) => {
    return response.json({ message: 'Testando o back-end' });
});

app.post('/projects', (request, response) =>{
    return 'teste';
})

// porta para acessar url
app.listen(3333, () => {
    console.log('🚀 Back-end iniciado');
});