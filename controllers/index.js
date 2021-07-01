const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
// from index.js from apis
// const router = require('express').Router();
const userRoutes = require('./routeUser');
const postRoutes = require('./routePost');
const commentRoutes = require('./routeComments');
// const { route } = require('./routeUser');

route.use('/users', userRoutes);
route.use('./posts', postRoutes);
route.use('./comments', commentRoutes);

// module.exports = router;