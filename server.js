/**
 * Created by MakerSpace on 24.02.2018.
 */

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Works');
});

app.listen(1111, () => {
    console.log('Port 1111 works');
});