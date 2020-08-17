class AboutController {
    // [GET] /about
    index(req, res) {
        res.render('about');
    }

    // [GET] /about/slug
    show(req, res) {
        res.render('demo', { slug: req.params.slug });
    }
}

module.exports = new AboutController();
