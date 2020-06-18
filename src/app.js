import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import './App.css';
import backgroundIMage from './assets/background.jpg';
import api from './services/api';

function App(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data);            
        });
    }, []);

    async function handleAddProject() {
        // aqui nao se pode usar projects.push porque não irá renderizar o componente novamente
        // setProjects([...projects, `Novo projeto ${Date.now()}`]);
        const response = await api.post('/projects',{
            title: `Novo projeto ${Date.now()}`,
            owner: "Robinson"
        });

        const project = response.data;
        
        setProjects([...projects,project]);
    }

    return (
        <>
            <Header title="Projects" />
            <img width={100} src={backgroundIMage} />
            <ul>
            { projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;