require('dotenv').config();
const path = require('path');
const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log('listening on: ' + PORT); });
