const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model { };

Comments.init(
    {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        comment_id: {
            type: DataTypes.INTEGER,
        },
        commenter_id: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
    },
)

module.exports = Comments;