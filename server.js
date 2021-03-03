const express = require('express');
const app = express();
const db = require('./config/connection')



//---------------------------------------------SEQUELIZE-----------------------------------------------------
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

// Body Parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))




const printRes = (req, res, next) => { console.log(res), next() }
const printReq = (req, res, next) => { console.log(req), next() }
app.use(express.static('public'))
app.use('/logins', require('./routes/logins'))

app.get('/api/members/:name', (req, res) => {
    const found = members.some(member => member.name === req.params.name)
    if (found) {
        res.json(members.filter(member => member.name === req.params.name))
    } else {
        res.status(400).json({ msg: 'No members with the name of ' + req.params.name })
    }


})

app.get('/index', (req, res) => {
    res.send('Hola')
})





// app.post('/register', (req, res) => {
//     const { email, firstName, lastName, password, confirmPassword, username } = req.body;
//     console.log(req.body)
//     console.log(username)
//     if (members.find(x => x.username === username)) {
//         res.send(req.body)
//         s
//     } else {
//         res.send("User doesn't exist")
//     }
// })


app.listen(process.env.PORT || 3000, () => console.log('Listening on localhost:3000'))