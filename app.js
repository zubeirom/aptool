require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const enforce = require('express-sslify');
const Sentry = require('@sentry/node');

Sentry.init({ dsn: 'https://919db697e951412f962235e5f02c43c3@sentry.io/1549178' });

const app = express();

// cors
app.use(cors());

// Sentry
app.use(Sentry.Handlers.requestHandler());

// Express sslify
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// Bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Sentry error middleware
app.use(Sentry.Handlers.errorHandler());


// Express-jwt middleware
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
        res.status(401).send(err);
    } else {
        next(err);
    }
});

app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 3000 ;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
