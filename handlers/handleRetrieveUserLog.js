const logCollection = require('../collections/LogCollection');

function handleRetrieveUserLog(req, res, next) {

    const userId = req.params['_id'];
    const log = logCollection.findLogByUserId(userId)[0];

    const from = req.query['from'];
    const to = req.query['to'];
    const limit = req.query['limit'];

    res.json(log.retrieve({ from, to, limit }));
}

module.exports = handleRetrieveUserLog;