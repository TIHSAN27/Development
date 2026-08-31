const express = require('express')
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/company');
const Employee = require(".models/employee 1")
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index' , {foo: 'FOO'});
})
app.get('/generate', (req, res) => {
    // Generate random data
  res.render('index' , {foo: 'FOO'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
