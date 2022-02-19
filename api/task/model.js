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
        't.task_id', 
        't.task_description', 
        't.task_notes', 
        't.task_completed' )

    return tasks.map(task => ({
        ...task,
        task_completed: !!task.task_completed
    }));
}
    
async function addTask(task){
    return db('tasks')
    .insert(task)
    .then(([task_id]) => {
        return db('tasks')
        .where('task_id', task_id)
        .first()
        .then((newTask) => ({
                ...newTask,
                task_completed: !!newTask.project_completed
            }));
        });
    }
 
 module.exports = {getTasks, addTask};
