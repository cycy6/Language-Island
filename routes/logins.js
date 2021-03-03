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



// For Creating an Account
router.post('/register', (req, res) => {
    const { email, firstName, lastName, password, confirmPassword, username } = req.body;


    Login.findAll()
        .then(logins => {
            if (!logins.some((item) => item.dataValues.username === username)) {
                // If the account does NOT already exist
                res.send('New Input')
                // Insert Account info into table
                Login.create()

            } else {
                // If the account DOES already exist
                res.send('That email is already in use')


            }
            res.sendStatus(200)
        })
        .catch(err => console.log(err))


    // console.log(req.body)
    // console.log(username)
    // if (members.find(x => x.username === username)) {
    //     res.send(req.body)
    //     s
    // } else {
    //     res.send("User doesn't exist")
    // }
})



module.exports = router