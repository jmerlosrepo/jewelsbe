const express = require('express');
const fileOps = require('./services/fileOperations');
const loggerOps = require('./services/logger');
const objectOperations = require('./services/objectOperations');
const bodyParser = require("body-parser");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('API Responding!');
});

app.get('/getData', (req, res) => {
    fileOps.readFile()
    .then(data => res.send(data))
    .catch(err => loggerOps.log(err))
});

app.get('/getSingleData/:id', (req, res) => {
    fileOps.readFile()
    .then(data => res.send(objectOperations.getSingleObject(data,req.params.id)))
    .catch(err => loggOps.log(err))
});

app.post('/dataOperations', (req, res) => {
    fileOps.readFile()
    .then(data => {
        fileOps.updateFile(objectOperations.addObject(data, req.body))
    })
    .then(() => res.sendStatus(200))
    .catch(err => loggerOps.log(err))
});
app.put('/dataOperations', (req, res) => {
    fileOps.readFile()
    .then(data => {
        fileOps.updateFile(objectOperations.updateObject(data, req.body))
    })
    .then(() => res.sendStatus(200))
    .catch(err => loggerOps.log(err))
});
app.delete('/dataOperations/:id', (req, res) => {
    fileOps.readFile()
    .then(data => {
        fileOps.updateFile(objectOperations.deleteObjects(data, req.params.id))
    })
    .then(() => res.sendStatus(200))
    .catch(err => loggerOps.log(err))
});

app.listen(PORT, () => console.log('Listening to port: ' + PORT));
