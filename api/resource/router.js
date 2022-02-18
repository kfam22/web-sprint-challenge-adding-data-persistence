const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.getResources()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
    Resource.addResource(req.body)
    .then(newResource => {
        res.status(201).json(newResource);
    })
    .catch(next);
});

module.exports = router;