const db = require('../../data/dbConfig');

async function getProjects() {
    // return Promise.resolve(`success! here are the projects`)
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
 
 module.exports = { getProjects, addProject}

 // - [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

// - [ ] `[POST] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`
