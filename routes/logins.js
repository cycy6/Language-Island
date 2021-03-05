const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const Login = require('../models/Login')

// For Logging in to an existing account
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    Login.findAll()
        .then(logins => {
            // If the username exists
            if (logins.some((item) => item.dataValues.email === email)) {
                if (logins.some((item) => item.dataValues.email === email && item.dataValues.password === password)) {
                    // And if the password is correct
                    res.render('learning.handlebars')
                } else {
                    // If the password is incorrect
                    return res.send('Incorrect Username/Password!')
                }
            } else {
                // If the username does not exist
                res.render('login.handlebars', { title: 'Login', loginErr: '*Account does not exist, Please create an account', layout: 'loginTemplate.handlebars' })

            }
        })
        .catch(err => console.log(err))
})


// For Creating an Account
router.post('/register', (req, res) => {
    const { email, firstName, lastName, password, confirmPassword, username } = req.body;


    Login.findAll()
        .then(logins => {

            if (!logins.some((item) => item.dataValues.email === email)) {
                // If the account does NOT already exist

                if (password === confirmPassword) {
                    // Insert Account info into table
                    Login.create({
                        email: email,
                        password: password
                    })
                    res.render('login.handlebars')
                }
                else {
                    res.render('register.handlebars', { title: 'Register', loginErr: `*Passwords don't match`, layout: 'loginTemplate.handlebars' })
                }


            } else {
                // If the account DOES already exist
                // return res.send('That email is already in use')
                res.render('register.handlebars', { title: 'Register', loginErr: '*That email is already in use', layout: 'loginTemplate.handlebars' })
            }
        })
        .catch(err => console.log(err))
})





module.exports = router