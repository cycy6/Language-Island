const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const Login = require('../models/Login')

router.get('/', (req, res) =>
    Login.findAll()
        .then(logins => {
            logins.forEach(entry => {
                console.log(entry.dataValues)
            });
            res.sendStatus(200)
        })
        .catch(err => console.log(err)))


// For Logging in to an existing account
router.post('/login', (req, res) => {
    const { email, password, username } = req.body;

    Login.findAll()
        .then(logins => {
            // If the username exists
            if (logins.some((item) => item.dataValues.username === username)) {
                if (logins.some((item) => item.dataValues.username === username && item.dataValues.password === password)) {
                    // And if the password is correct
                    return res.send('You are logged in!')
                } else {
                    // If the password is incorrect
                    return res.send('Incorrect Username/Password!')
                }
                // If the username does not exist
            } else return res.send('Account does not exist, Please create an account')
        })
        .catch(err => console.log(err))
})


// For Creating an Account
router.post('/register', (req, res) => {
    const { email, firstName, lastName, password, confirmPassword, username } = req.body;


    Login.findAll()
        .then(logins => {
            if (!logins.some((item) => item.dataValues.username === username)) {
                // If the account does NOT already exist

                // Insert Account info into table
                Login.create({
                    username: username,
                    password: password

                })

                return res.send('New Input')
            } else {
                // If the account DOES already exist


                return res.send('That email is already in use')
            }
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
})





module.exports = router