const express = require('express');
const { response, request } = require('express');

// aplicação criada
const app = express();

// busca informações
app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

// envia informações
app.post('/projects', (request, response) =>{
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

// edita informações
app.put('/projects/:id', (request, response)=> {
    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ]);
});

// deletar informações
app.delete('/projects/:id', (request, response)=> {
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ]);
});

// porta para acessar url
app.listen(3333, () => {
    console.log('🚀 Back-end iniciado');
});