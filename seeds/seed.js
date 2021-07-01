const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    // for (const project of projectData) {
    //     await Project.create({
    //         ...project,
    //         user_id: users[Math.floor(Math.random() * users.length)].id,
    //     });
    // }
    const Posts = await User.bulkCreate(postData, {
        individualHooks: true,
        returning: true,
    });

    const Comments = await User.bulkCreate(commentData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();