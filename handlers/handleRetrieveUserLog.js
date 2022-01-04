const logCollection = require('../collections/LogCollection');
const User = require('../entities/User');

function handleRetrieveUserLog(req, res, next) {

    const userId = req.params['id'];
    const log = logCollection.findLogByUserId(userId)[0];

    const from = req.query['from'];
    const to = req.query['to'];
    const limit = req.query['limit'];

    res.json(Object.setPrototypeOf(log.retrieve({ from, to, limit }), User.prototype));
}

module.exports = handleRetrieveUserLog;