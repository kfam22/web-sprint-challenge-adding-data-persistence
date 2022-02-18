// build your server here and require it from index.js
const express = require('express');
const helmet = require('helmet');
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router')

const server = express();

server.use(helmet());
server.use(express.json());



server.use('/api/projects', projectRouter);
// server.use('/api/resources', resourceRouter);
// server.use('api/tasks', taskRouter);

server.use('*', (req, res, next) => {
  res.json({ api: 'up '})
})

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    custom: 'something bad happened.. oops',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;