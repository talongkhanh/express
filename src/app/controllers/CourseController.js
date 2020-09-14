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
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        Course.create(req.body)
            .then(() => res.redirect('/me/stored/courses'))
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
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        Course.findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE] courses/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] courses/:id/force
    deleteForce(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController();
