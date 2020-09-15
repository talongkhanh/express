const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');

const route = require('./routes');
const db = require('./config/db');
// connect db
db.connect();
const app = express();
const port = 8000;

// app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: function (a, b) {
                return a + b;
            },
            formatDate: function (date) {
                return date.toLocaleString();
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// route
route(app);

// listen app
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
