const db = require('../../data/dbConfig');

async function getProjects() {
    const projects = await db('projects');
    return projects.map(project => ({
        ...project,
        project_completed: !!project.project_completed
    }));
 }

 async function addProject(project) {
    return db('projects')
    .insert(project)
    .then(([project_id]) => {
        return db('projects')
        .where('project_id', project_id)
        .first()
        .then(newProject => ({
            ...newProject,
            project_completed: !!newProject.project_completed
        }));
    });
 }
 
 module.exports = { getProjects, addProject};
