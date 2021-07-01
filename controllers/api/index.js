const router = require('express').Router();
const userRoutes = require('./routeUser');
const postRoutes = require('./routePost');
const commentRoutes = require('./routeComments');
const { route } = require('./routeUser');

route.use('/users', userRoutes);
route.use('./posts', postRoutes);
route.use('./comments', commentRoutes);

module.exports = router;