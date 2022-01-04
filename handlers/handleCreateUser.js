const userCollection = require('../collections/UserCollection');
const logCollection = require('../collections/LogCollection');
const UserBuilder = require('../entities/UserBuilder');
const LogBuilder = require('../entities/LogBuilder');

function handleCreateUser(req, res, next) {

    const username = req.body['username'];
    const user = new UserBuilder().withUsername(username).build();
    userCollection.save(user);

    const userLog = new LogBuilder().withUser(user).build();
    logCollection.save(userLog);
    
    res.json(user);
}

module.exports = handleCreateUser;