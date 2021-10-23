const Posts = require("../models/Posts");
const Category = require("../models/Category");
Category.hasMany(Posts);
Posts.belongsTo(Category);
