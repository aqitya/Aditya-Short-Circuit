const axios = require('axios');
const shortID = require('shortid'); 
const moongose = require('mongoose');
const express = require('express');

const app = express();

const dummyDB =
{
    "LONG": "SHORT"
}

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(5050, () => {
  console.log(`Example app listening at http://localhost:${5050}`);
});

app.post('/create', (req, res) => {
    console.log(req.body);
})

app.get('/:code', (req, res) => {
    res.send(dummyDB[req]);
})