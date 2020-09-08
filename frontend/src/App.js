import React, { useState, useEffect } from 'react';
import api from './services/api';
import Header from './components/Header';
import './App.css';

function App(){
    const [projects, setProjects] = useState([]);

    async function hundleAddProject(){
        //setProjects([... projects, `Nem Project ${Date.now()}`]);
        const response = await api.post('projects', {
            title: `Novo Projeto ${Date.now()}`,
            owner: "Raymison"
        });

        const project = response.data;

        setProjects([... projects, project]);
    }

    useEffect(() => {
        api.get('projects').then(response =>{
            setProjects(response.data);
        });
    }, [])

    return (
        <>
            <Header title="Projects" />

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={hundleAddProject}>Add Project</button>
        </>
    );
}

export default App;