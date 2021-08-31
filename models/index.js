// bring Users, Posts and Comments together here via require

const Comments = require('./Comments');
const Users = require('./Users');
const Posts = require('./Posts');

Posts.belongsTo(Users, {
    foreignKey: "user_id",
});

Posts.hasMany(Comments, {
    foreignKey: "post_id",
    onDelete: "cascade",
    hooks: true,
});

Comments.belongsTo(Users, {
    foreignKey: "user_id",
    onDelete: "cascade",
    hooks: true,
});

module.exports = { Comments };