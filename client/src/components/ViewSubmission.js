import React from 'react';
import '../styles/ViewSubmission.css'
import { useNavigate } from 'react-router-dom';

const ViewSubmission = () => {
    const navigate = useNavigate();

    // Simulated project data
    const projects = [
        { id: 1, name: 'Project A', teamNumber: '001' },
        { id: 2, name: 'Project B', teamNumber: '002' },
        { id: 3, name: 'Project C', teamNumber: '003' },
        // Add more projects as needed
    ];

    const goToProjectDetails = (projectId) => {
        navigate(`/project/${projectId}`);
    };

    return (
        <div className="project-container">
            {projects.map(project => (
                <div key={project.id} className="project-box" onClick={() => goToProjectDetails(project.id)}>
                    <h3>{project.name}</h3>
                    <p>Team Number: {project.teamNumber}</p>
                </div>
            ))}
        </div>
    );
}

export default ViewSubmission;
