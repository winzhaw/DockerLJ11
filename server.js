Uf'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	res.send('Hello FS2024 DevOps Course! :-))) (((-: LMAO HOW MUCH TIasdfasdfasdfasdfasdfdasdfasdfME DOES THIS CONSUME MAN 3E');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
