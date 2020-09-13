const Course = require('../models/Course');
const { singleToObject } = require('../../util/mongoose');

class CourseController {
    //GET courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: singleToObject(course) });
            })
            .catch(next);
    }
    //GET courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    //POST courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => {});
    }
    //[GET] courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('courses/edit', { course: singleToObject(course) });
            })
            .catch(next);
    }
    //[PUT] courses/:id
    update(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        Course.findByIdAndUpdate({ _id: req.params.id }, formData)
            .then(() => res.redirect('/me/stored/courses'))
            .catch((err) => {
                next(err);
            });
    }
}

module.exports = new CourseController();
