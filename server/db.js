const pg = require('pg');
const { Sequelize } = require('sequelize');

module.exports = new Sequelize(process.env.POSTGRES_URL + "?sslmode=require")
