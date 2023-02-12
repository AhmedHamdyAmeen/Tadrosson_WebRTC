/**
 * Middleware used to Protect the Route
 * @param {*} req - Request
 * @param {*} res - Response
 * @param {*} next - Next Function
 */
const isAuthenticated = (req, res, next) => {
    !req.isAuthenticated() ? res.redirect('/') : next();
};

module.exports = isAuthenticated;
