const aboutRouter = require('./about');
const siteRouter = require('./site');

function route(app) {
    app.use('/about', aboutRouter);
    app.use('/', siteRouter);
}

module.exports = route;
