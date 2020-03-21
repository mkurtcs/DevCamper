// @desc Logs request to console
const logger = (req, res, next) => {
    console.log(
        `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
    );
    next(); // next piece of middleware in the cycle.
}

module.exports = logger;