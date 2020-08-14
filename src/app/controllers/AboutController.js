class AboutController {
    
    // [GET] /about
    index(req, res) {
        res.render('about');
    }

    // [GET] /about/slug
    show(req, res) {
        res.send('Hello World!');
    }
}

module.exports = new AboutController;