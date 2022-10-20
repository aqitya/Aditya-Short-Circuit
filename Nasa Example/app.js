const axios = require('axios');
const express = require('express');
const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let counter = 2;
stupidDB = {0: "item1", 1: "item2"};

app.get('/', (req, res) => {
  res.send('Our first API');
});

app.get('/info/index', (req, res) => {
    res.send({ counter: counter });
})

app.get('/info/capacity', (req, res) => {
    res.send({ capacity: Object.keys(stupidDB).length });
})

app.get('/db/all', (req, res) => {
    res.send(stupidDB);
})

app.get('/db/:id', (req, res) => {
    console.log(req);
    const id = req.params.id
    if (id in stupidDB) {
        res.send(stupidDB[id])
    } else {
        res.send({ error: 'no object found with given id' })
    }
}); 

app.get('/nasa', (req, res) => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        res.send(error);
    })
})

app.post('/db/:id', (req, res) => {
    console.log(req);
    const item = req.params.id;
    stupidDB[counter] = item;
    counter += 1
    res.send(`POST Request Successful. Item placed: ${item}`)
});

app.put('/db/:id', (req, res) => {
    const id = req.params.id;
    const item = counter;
    if (id in stupidDB) {
        stupidDB[id] = item;
        res.send({ newItem: item });
    } else {
        res.send({ error: 'no object found with this id' });
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});