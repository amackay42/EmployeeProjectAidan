const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');

const List = require('.database/models/list')
const Task = require('./database/models/task')

/*
 CORS - cross origin request security
 localhost:3000 - backend API
 localhost:4200 - front-end
 */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/*
List: Create,ReadeOne, ReadAll, Update, Delete
Task: Create,ReadeOne, ReadAll, Update, Delete
GET -> GET DATA
POST -> Save
PUT PATCH -> Update
DELETE - Delete
*/

app.get('/lists', (req, res) => {
    Task.find({})
        .then(lists => res.send(lists))
        .catch((error) => console.log(error));
});

app.use(express.json());

app.listen(3000, () => console.log("Server Connected on port 3000"));