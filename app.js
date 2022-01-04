const express = require('express');
const bodyParser = require('body-parser');
const { logRequests } = require('./middlewares/logger');
const handleCreateUser = require('./handlers/handleCreateUser');
const handleGetAllUsers = require('./handlers/handleGetAllUsers');
const handleCreateExercise = require('./handlers/handleCreateExercise');
const handleRetrieveUserLog = require('./handlers/handleRetrieveUserLog');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logRequests);

app.route("/api/users")
    .post(handleCreateUser)
    .get(handleGetAllUsers);

app.route("/api/users/:_id/exercises")
    .post(handleCreateExercise);

app.route("/api/users/:id/logs")
    .get(handleRetrieveUserLog);

module.exports = app;