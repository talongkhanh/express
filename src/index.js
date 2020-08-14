const path = require('path');
const express = require('express');
// const morgan = require('morgan');
const handlebars = require('express-handlebars');

const route = require('./routes');
// define app
const app = express();
const port = 8000;

// app.use(morgan('combined'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// view engine
app.engine('hbs', handlebars({
	extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// route
route(app);

// listen app
app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});