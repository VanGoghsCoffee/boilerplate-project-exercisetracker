function logRequests(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.body} - ${req.ip}`);
    next();
}

exports.logRequests = logRequests;