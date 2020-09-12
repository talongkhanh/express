const coursesRouter = require('./courses');
const aboutRouter = require('./about');
const siteRouter = require('./site');
const meRouter = require('./me');

function route(app) {
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/about', aboutRouter);
    app.use('/', siteRouter);
}

module.exports = route;
