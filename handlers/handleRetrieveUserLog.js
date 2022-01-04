const logCollection = require('../collections/LogCollection');

function handleRetrieveUserLog(req, res, next) {

    const userId = req.params['id'];
    let log = logCollection.findLogByUserId(userId)[0];

    const from = req.query['from'];
    const to = req.query['to'];
    const limit = req.query['limit'];
    log = log.retrieve({ from, to, limit });

    console.log(typeof log);

    res.json(log);
}

module.exports = handleRetrieveUserLog;