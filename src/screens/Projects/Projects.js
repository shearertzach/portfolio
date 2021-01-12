import React from 'react'
import allProjects from '../../data/projects.json'
import './Projects.css'

export default function Projects() {

    function renderProjects() {
        return allProjects.map((project) => {
            return (
                <div className='projectCard'>
                    <a href={project['external-link']}><p>{project.name}</p></a>
                    <p>{project.description}</p>
                </div>
            )
        })
    }

    return (
        <div className='projects'>
            {renderProjects()}
        </div>
    )
}