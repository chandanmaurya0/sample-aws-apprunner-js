const express = require('express');

const app = express();

//  import the dotenv module
require('dotenv').config();

app.get('/', (req, res) => {
    res.send(`Hello World- ${process.env.ENVIRONMENT}`);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});