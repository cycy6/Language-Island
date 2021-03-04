const Sequelize = require('sequelize')

const sequelize = new Sequelize('users', 'root', 'password', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: { timestamps: false },
    pool: { max: 5, min: 0, idle: 10000 },
})


module.exports = sequelize;