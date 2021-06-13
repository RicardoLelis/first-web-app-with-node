'use strict'

const fs = require('fs');
const path = require('path');

const express = require('express');
const cors = require('cors');
// const sessions = require('./sessions.json');
// load sesisons.json using FS module
const sessions = fs.readFileSync(path.join(__dirname, 'sessions.json'), 'utf8');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Hello Salesforce Devs from Express!</h1>')
});

app.get('/api/sessions/', (req, res) => {
    res.json(JSON.parse(sessions));
})

app.listen(port, () => {
    console.log(`Express server running on http://localhost:${port}`)
});