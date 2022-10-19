const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("goon");
})

app.listen(port, (req, res) => {
    console.log(`http://localhost:${port}`);
})