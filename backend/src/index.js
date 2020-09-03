const express = require('express');
 const { uuid, isUuid } = require('uuidv4');

// aplicação criada
const app = express();

// receber parâmetros do tipo json
app.use(express.json());

// array pra armazenar em tempo de execução
const projects = [];

// middlewares
function logRequests(request, response, next){
    const { method, url } = request;

    const logLabel = `[${method.toUpperCase()}] ${url}`;

    console.log(logLabel);

    return next();
};

function validaProjectId(request, response, next){
    const { id } = request.params;

    if(!isUuid(id)){
        return response.status(400).json({ error: 'Invalid ID' });
    }

    return next();
}

app.use(logRequests);

// busca informações
app.get('/projects',(request, response) => {
    const { owner } = request.query;

    const results = owner
        ? projects.filter(project => project.owner.includes(owner))
        : projects;


    return response.json(results);
});

// envia informações
app.post('/projects', (request, response) =>{
    const {title, owner} = request.body;

    const project = {id: uuid(), title, owner};

    projects.push(project);

    return response.json(project);
});

// edita informações
app.put('/projects/:id', validaProjectId, (request, response)=> {
    const {id} = request.params;
    const {title, owner} = request.body;

    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0){
        return response.status(400).json({ error: 'prject not found' });
    }

    const project = {
        id,
        title,
        owner
    };

    projects[projectIndex] = project;

    return response.json(project);

});

// deletar informações
app.delete('/projects/:id',validaProjectId ,(request, response)=> {
    const {id} = request.params;
    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0){
        return response.status(400).json({ error: 'prject not found' });
    }

    projects.splice(projectIndex, 1);

    return response.status(204).send();
});

// porta para acessar url
app.listen(3333, () => {
    console.log('🚀 Back-end iniciado');
});