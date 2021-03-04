const express = require('express');
const app = express();
const db = require('./config/connection');



//---------------------------------------------SEQUELIZE-----------------------------------------------------
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static('public'))
app.use('/logins', require('./routes/logins'));

app.get('/api/members/:name', (req, res) => {
    const found = members.some(member => member.name === req.params.name)
    if (found) {
        res.json(members.filter(member => member.name === req.params.name))
    } else {
        res.status(400).json({ msg: 'No members with the name of ' + req.params.name })
    }


});




app.listen(process.env.PORT || 3000, () => console.log('Listening on localhost:3000'));