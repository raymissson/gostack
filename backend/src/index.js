const express = require('express');
const { response, request } = require('express');

// aplicação criada
const app = express();

// receber parâmetros do tipo json
app.use(express.json());

// busca informações
app.get('/projects', (request, response) => {
    const { title, owner } = request.query;

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

// envia informações
app.post('/projects', (request, response) =>{
    const body = request.body;
    console.log(body);
    
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

// edita informações
app.put('/projects/:id', (request, response)=> {
    const params = request.params;

    console.log(params);
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