const router = require('express').Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
    Task.getTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    console.log('task post wired')
})

module.exports = router;

