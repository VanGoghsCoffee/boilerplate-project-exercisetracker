const logCollection = require('../collections/LogCollection');
const userCollection = require('../collections/UserCollection');

function handleRetrieveUserLog(req, res, next) {

    const userId = req.params['_id'];
    const log = logCollection.findLogByUserId(userId)[0];
    const user = { ...userCollection.findById(userId)[0] };

    const from = req.query['from'];
    const to = req.query['to'];
    const limit = req.query['limit'];

    log = log.retrieve({ from, to, limit });
    user.count = log.length;
    user.log = log;

    res.json(user);
}

module.exports = handleRetrieveUserLog;