const router = require('express').Router();
const { request, response } = require('express');
const { Users } = require('../../models');

router.post('/login', async, (request, response) => {
    try {
        const userData = await Users.findOne({ where: { username: request.body.username } });
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }
        const validPassword = await userData.checkPassword(request.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }
        request.session.save(() => {
            request.session.user_id = userData.id;
            request.session.logged_in = true;

            response.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        response.status(400).json(err);
    }
});

// signup
router.post('/signUp', async (request, response) => {
    try {
        const userData = await User.create(request.body);

        request.session.save(() => {
            request.session.user_id = userData.id;
            request.session.logged_in = true;

            response.status(200).json(userData);
        })
    } catch (err) {
        response.status(400).json(err);
    }
});

// logout
router.post('/logout', (request, response) => {
    if (request.session.logged_in) {
        request.session.destroy(() => {
            response.status(204).end();
        });
    } else {
        response.status(404).end();
    }
});

module.exports = router;