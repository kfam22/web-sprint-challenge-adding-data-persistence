const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    console.log('resources post wired')
})

module.exports = router;


// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`