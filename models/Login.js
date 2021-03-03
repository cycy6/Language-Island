const Sequelize = require('sequelize')
const db = require('../config/connection')

const Login = db.define('login', {
    id: { type: Sequelize.STRING, primaryKey: true },
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING }
})

module.exports = Login