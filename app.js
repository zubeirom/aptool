require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));

// cors
app.use(cors());

app.use('/', require('./routes/index'));

const { PORT } = process.env;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
