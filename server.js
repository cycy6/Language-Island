const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})