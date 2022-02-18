const projects = [
  {
    project_name: 'to-do list',
    project_description: 'helps get things done',
    project_completed: false
  },
  {
    project_name: 'e-commerce web site',
    project_description: 'online shop',
    project_completed: false
  },
  {
    project_name: 'portfolio',
    project_description: 'showcase work',
    project_completed: false
  },
]

const resources = [
  {
    resource_name: 'MDN Web Docs',
    resource_description: 'extensive programming documentation'
  },
  {
    resource_name: 'W3Schools',
    resource_description: 'educational coding site'
  },
  {
    resource_name: 'Unsplash',
    resource_description: 'open source images'
  }
]

const tasks = [
  {
    task_description: 'create wireframe',
    task_notes: 'make simple ui',
    task_completed: false,
    project_id: 1
  },
  {
    task_description: 'build out components',
    task_notes: null,
    task_completed: false,
    project_id: 2
  },
  {
    task_description: 'compile projects to showcase',
    task_notes: 'need a redux project and a backend project',
    task_completed: false,
    project_id: 3
  },
]

const project_resources = [
  {
    project_id: 1,
    resource_id: 2
  },
  {
    project_id: 2,
    resource_id: 1
  },
  {
    project_id: 3,
    resource_id: 3
  },
  {
    project_id: 3,
    resource_id: 1
  },
]

exports.seed = async function (knex) {
  await knex('projects').insert(projects)
  await knex('resources').insert(resources)
  await knex('tasks').insert(tasks)
  await knex('project_resources').insert(project_resources)
}