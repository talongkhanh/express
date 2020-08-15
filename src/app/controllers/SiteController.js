const Course = require('../models/Course');

class SiteController {
    // [GET] /
    index(req, res) {
        // res.render('home');
        Course.find({}, (err, docs) => {
            // docs.forEach
            if (!err) {
                res.json(docs);
            } else {
                res.status(400).send({ error: 'Error!' });
            }
        });
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
