                    require('dotenv').config();
const express     = require('express');
const bodyParser  = require('body-parser');
const massive     = require('massive');
const cors        = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
   .then(db => app.set('db', db));

app.get('/api/shelf/:id', (req, res, next) => {
    const db = app.get('db');
    const {id} = req.params.id;
    db.get_shelf(id)
    .then(shelf => {
        res.status(200).send(shelf)
    })
})

app.get('/api/bin/:id', (req, res, next) => {
    const db = app.get('db');
    const {id} = req.params.id;
    db.get_bin(id)
    .then(bin => {
        res.status(200).send(bin)
    })
})

app.get('/api/bins/:id', (req, res, next) => {
    const db = app.get('db');
    const {id} = req.params;
    console.log('this is the id', id)
    db.get_bins(id)
    .then(bin => {
        console.log(bin)
        res.status(200).send(bin)
    })
})

// app.get('/api/bins/:id/:binid', (req, res, next) => {
//     const db = app.get('db');
//     const {id} = req.params;
// })

app.post('/api/bin/:id', (req, res, next) => {
    const db = app.get('db');
    const {binName, shelfId, itemName, itemPrice} = req.body;
    db.bin_create([binName, shelfId, itemName, itemPrice])
    .then(bin => {
        res.status(200).send(bin)
    })
})

app.put('/api/bin/:id', (req, res, next) => {
    console.log('updating item', req.body)
    const db = app.get('db');
    const {id} = req.params.id;
    const {binName, shelfId, itemName, itemPrice} = req.body
    db.bin_edit([id, binName, shelfId, itemName, itemPrice])
    .then(bin => {
        res.status(200).send(bin)
    })
})

app.delete('/api/bin/:id', (req, res, next) => {
    const db = app.get('db');
    const {id} = req.params.id;
    db.bin_delete(id)
    .then(bin => {
        res.status(200).send(bin)
    })
})

const port = 3007;
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})