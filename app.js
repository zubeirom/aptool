require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// cors
app.use(cors());

// Express-jwt middleware
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
        res.status(401).send(err);
    } else {
        next(err);
    }
});

app.use('/', require('./routes/index'));

const { PORT } = process.env;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
