const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();
const port = 8000;

// app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
// view engine
app.engine('hbs', exphbs({
	extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// 

app.get('/', (req, res) => {
	res.render('home')
});

app.get('/about', (req, res) => {
	res.render('about')
});

app.get('/search', (req, res) => {
	res.render('search')
});
// 
app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`)
});