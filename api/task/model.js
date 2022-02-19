const db = require('../../data/dbConfig');

async function getTasks() {
    const tasks = await db('tasks as t')
    .leftJoin(
        'projects as p', 
        't.project_id', 
        'p.project_id')
    .select(
        'p.project_name', 
        'p.project_description', 
        't.task_id', 't.task_description', 
        't.task_notes', 
        't.task_completed' )

    return tasks.map(task => ({
        ...task,
        task_completed: !!task.task_completed
    }));

    // async function addTask(task) {
    //     return db('tasks').insert(task)
    // }
 }


 
 module.exports = {getTasks}

 // - [ ] `[POST] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

// - [ ] `[GET] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Each task must include `project_name` and `project_description`
//   - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`