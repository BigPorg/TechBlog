// posts are blog posts, connect to Users.js?
// how to get username to connect to post!
// BELONGSTO!

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model { };

Posts.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1],
        },
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        default: DataTypes.NOW,
    },
    user: {
        // user as in content's publisher
        type: DataTypes.TEXT,
        allowNull: false,
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts',
}
);

module.exports = Posts;