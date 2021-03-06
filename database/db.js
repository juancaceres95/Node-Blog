const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
// const Category = require("../models/Category");
// const Posts = require("../models/Posts");
dotenv.config({ path: ".env" });

const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

module.exports = db;
