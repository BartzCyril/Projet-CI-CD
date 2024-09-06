const express = require('express');

require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send(`Bonjour les gens`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});