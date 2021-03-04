const express = require('express');
const app = express();
const db = require('./config/connection');
const exphbs = require('express-handlebars');



//---------------------------------------------SEQUELIZE-----------------------------------------------------
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// app.use(express.static('public'))
app.use('/logins', require('./routes/logins'));

app.get('/', (req, res) => {
    res.render('login.handlebars')
});




app.listen(process.env.PORT || 3000, () => console.log('Listening on localhost:3000'));