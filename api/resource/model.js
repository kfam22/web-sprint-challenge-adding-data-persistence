const db = require('../../data/dbConfig')

async function getResources() {
    const resources = await db('resources')
    return resources
    // return Promise.resolve(`success! here are the resources`)
 }
 
 module.exports = {getResources}