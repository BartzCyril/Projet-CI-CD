const express = require('express');

require('dotenv').config();

const aPp = express();

aPp.get('/', (req, res) => {
    res.send(`Hello world`);
});

aPp.listen(3000, () => {
    console.log('Server is running on port 3000');
});