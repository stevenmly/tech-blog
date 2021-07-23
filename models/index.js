const User = require('./User');
const Post = require('./User');
const Comment = require('./User');

// create associations 
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post, Comment };