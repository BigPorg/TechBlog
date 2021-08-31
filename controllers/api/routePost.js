const router = require('express').Router();
const withAuth = require('../../utils/auth');
const helpers = require('../../utils/helpers');
const { TechBlog } = require('../../models');
const { request } = require('express');

// post, using create
router.post('/', withAuth, async (request, response) => {
    try {
        const newPost = await TechBlog.create({
            ...request.body, user_id: request.session.user_id
        });
        response.json(newPost);
    } catch (err) {
        response.json(err);
    }
});
// put, using update
router.put('/edit/:id', withAuth, async (request, response) => {
    try {
        const updatePost = await TechBlog.update({
            title: request.boby.title, content: request.body.content,
        });
        response.json(updatePost);
    } catch (err) {
        response.json(err);
    }
});
// delete, using destroy(?)
router.delete('/:id', withAuth, async (request, response) => {
    try {
        const destroyedPost = await TechBlog.destroy({
            where: {
                id: request.params.id,
            },
        })
        // .then(())
        if (!destroyedPost) {
            response.json({ message: 'No post found with this ID' });
            return;
        } response.json(destroyedPost);
    } catch (err) {
        response.json(err);
    }
});

module.exports = router;