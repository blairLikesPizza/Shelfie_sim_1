                    require('dotenv').config();
const express     = require('express');
const bodyParser  = require('body-parser');
const massive     = require('massive');
const cors        = require('cors');

    // 74C
const app = express();

app.use(bodyParser.json());
app.use(cors());

    // 70C
massive(process.env.CONNECTION_STRING)
   .then(db => app.set('db', db));

   // 74D-1
app.get('/api/shelf/:id', (req, res, next) => {
    const db = app.get('db');
    const {id} = req.params.id;
    db.get_shelf(id)
    // 42D
    .then(shelf => {
        res.status(200).send(shelf)
    })
})

app.get('/api/bin/:id', (req, res, next) => {
    const db = app.get('db');
    const bin = "Bin" + req.params.id[1];
    const shelf = "Shelf " + req.params.id[0];
    db.get_bin([bin, shelf])
    .then(bin => {
        // console.log(bin)
        res.status(200).send(bin)
    })
})

app.get('/api/bins/:id', (req, res, next) => {
    const db = app.get('db');
    const {id} = req.params;
    // console.log('this is the id', id)
    db.get_bins(id)
    .then(bin => {
        // console.log(bin)
        res.status(200).send(bin)
    })
})

    // 74D-3
app.post('/api/bin', (req, res, next) => {
    // console.log(req.body)
    const db = app.get('db');
    const {binName, shelfId, itemName, itemPrice} = req.body;
    db.bin_create([binName, shelfId, itemName, itemPrice])
    .then(bin => {
        res.status(200).send(bin)
    })
})

    // 74D-2
app.put('/api/bin/:id', (req, res, next) => {
    // console.log('updating item', req.body)
    const db = app.get('db');
    const {id} = req.params.id;
    const {binName, shelfId, itemName, itemPrice} = req.body;
    const shelf = "Shelf " + req.params.id[0];
    const bin = "Bin" + req.params.id[1];
    db.bin_edit([shelf, bin, binName, shelfId, itemName, itemPrice])
    .then(bin => {
        res.status(200).send(bin)
    })
})

    // 74D-4
app.delete('/api/bin/:id', (req, res, next) => {
    const db = app.get('db');
    const {id} = req.params.id;
    const shelf = "Shelf " + req.params.id[0];
    const bin = "Bin" + req.params.id[1]
    db.bin_delete(shelf, bin)
    .then(bin => {
        res.status(200).send(bin)
    })
})

const port = 3007;
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})