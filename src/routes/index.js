const coursesRouter = require('./courses');
const aboutRouter = require('./about');
const siteRouter = require('./site');

function route(app) {
    app.use('/courses', coursesRouter);
    app.use('/about', aboutRouter);
    app.use('/', siteRouter);
}

module.exports = route;
