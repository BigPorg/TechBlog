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
        response.status(200).json(newPost);
    } catch (err) {
        response.status(400).json(err);
    }
});
// put, using update
router.put('/edit/:id', async (request, response) => {
    try {
        const updatePost = await TechBlog.update({
            title: request.boby.title, content: request.body.content,
        });
        response.status(200).json(updatePost);
    } catch (err) {
        response.status(400).json(err);
    }
});
// delete, using destroy(?)
router.delete('/delete/:id', async (request, response) => {
    try {
        const destroyedPost = await TechBlog.destroy({
            where: {
                id: request.params.id,
            },
        })
        // .then(())
        if (!destroyedPost) {
            response.status(404).json({ message: 'No post found with this ID' });
            return;
        } response.status(200).json(destroyedPost);
    } catch (err) {
        response.status(400).json(err);
    }
});

module.exports = router;