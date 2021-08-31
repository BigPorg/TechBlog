const router = require('express').Router();
const { response } = require('express');
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');
// const withHelpers = require('../../utils/helpers');

router.post('/', withAuth, async (request, response) => {
    try {
        const newComment = await Comments.create({
            ...request.body,
            // need clarification on what ... does
            userId: req.session.userId,
        });
        response.json(newComment);
    } catch (err) {
        response.status(400).json(err);
    }
});

module.exports = router;