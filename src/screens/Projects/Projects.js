import React from 'react'
import allProjects from '../../data/projects.json'
import './Projects.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Projects() {

    function renderProjects() {
        return allProjects.map((project, i) => {
            return (
                <motion.div
                    className='projectCard'
                    initial={{ opacity: 0, y: 300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i, type: "spring", stiffness: 100 }}
                >
                    <a href={project['external-link']}><p>{project.name}</p></a>
                    <img src={project['img']} alt='placeholderimg' />
                    <p>{project.description}</p>
                </motion.div>
            )
        })
    }

    return (
        <div className='projects'>
            <Link to='/' className='backButton'>← Back</Link>
            <div className='projectsContainer'>
                {renderProjects()}
            </div>
        </div>
    )
}