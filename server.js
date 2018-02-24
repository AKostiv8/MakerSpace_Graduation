/**
 * Created by MakerSpace on 24.02.2018.
 */

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const firebase = require('firebase');
const config = require('./config/database');
firebase.initializeApp(config);


// Frontend directory

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(express.static(__dirname + '/frontend/dist/'));

// Connection to Angular 2 (index.html)
app.get('*', (req, res) => {
    res.send('Works');
   // res.sendFile(path.join(__dirname + '/frontend/dist/index.html'));
});

app.listen(1111, () => {
    console.log('Port 1111 works');
});