const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.getProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(next);
})

router.post('/', (req, res, next) => {
    Project.addProject(req.body)
    .then(newProject => {
        res.status(201).json(newProject);
    })
    .catch(next);
})

module.exports = router;


