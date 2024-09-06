const express = require('express');

require('dotenv').config();

const aPp = express();

aPp.get('/', (req, res) => {
    res.send(`Bonjour`);
});

aPp.listen(3000, () => {
    console.log('Server is running on port 3000');
});