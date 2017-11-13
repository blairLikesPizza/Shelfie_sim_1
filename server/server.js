                    require('dotenv').config();
const express     = require('express');
const bodyParser  = require('body-parser');
const massive     = require('massive');


const app = express();

app.use(bodyParser.json());

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

app.post('/api/bin/:id', (req, res, next) => {
    const db = app.get('db');
    const {binName, shelfId, itemName, itemPrice} = req.body;
    db.bin_create()
    .then(bin => {
        res.status(200).send(bin)
    })
})

app.put('/api/bin/:id', (req, res, next) => {
    const db = app.get('db');
    const {id} = req.params.id;
    db.bin_edit(id)
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

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})