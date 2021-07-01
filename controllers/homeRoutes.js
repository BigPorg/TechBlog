const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Users, Posts, Comments } = require('../models');
const { request, response } = require('express');
// remember serialization/sanitization

// home
router.get('/', async (request, response) => {
    try {
        const postsData = await Posts.findAll();
        const posts = postsData.map((blog) => posts.get({ plain: true }));
        response.render('home', { posts, logged_in: request.session.logged_in })
    } catch (err) {
        console.log(err);
        response.status(500).json(err);
    }
});

// comments
router.get('/comments/:id', async (request, response) => {
    try {
        const TechBlogData = await TechBlog.findByPk(request.params.id, {
            include: [{ model: Comments }]
        });
        const posts = TechBlogData.get({ plain: true });
        const users = await Users.findByPk(posts.user_id, { exclude: ['password'] });
        const postAuth = users.get({ plain: true })
    } catch (err) {
        console.log(err);
        response.status(500).json(err);
    }
});

// login, should redirect if already logged in
router.get('/login', (request, response) => {
    if (request.session.logged_in) {
        response.redirect('/profile');
        return;
    }
    response.render('login');
})

// sign up
router.get('signup', withAuth, async (request, response) => {
    try {
        response.render('signup', { logged_in: request.session.logged_in })
    } catch (err) {
        console.log(err);
        response.status(500).json(err);
    }
})

module.exports = router;