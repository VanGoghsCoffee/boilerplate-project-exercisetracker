const userCollection = require('../collections/UserCollection');

function handleGetAllUsers(req, res, next) {
    res.json(userCollection.getAll());
}

module.exports = handleGetAllUsers;