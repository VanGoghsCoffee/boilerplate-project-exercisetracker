function logRequests(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    console.log(req.body);
    next();
}

exports.logRequests = logRequests;