const axios = require('axios');

module.exports = {
    async get(req, res, next) {
        try {
            if (req.query.search || req.query.location) {
                const q = req.query;
                // eslint-disable-next-line no-restricted-syntax
                for (const key in q) {
                    if (q[key] === 'undefined') {
                        q[key] = '';
                    }
                }
                const query = `description=${req.query.search}&location=${req.query.location}`;
                const jobs = await axios(
                    {
                        method: 'get',
                        url: `https://jobs.github.com/positions.json?${query}`,
                    },
                );
                res.status(200).send(jobs.data);
                next();
            } else {
                const jobs = await axios(
                    {
                        method: 'get',
                        url: 'https://jobs.github.com/positions.json',
                    },
                );
                res.status(200).send(jobs.data);
                next();
            }
        } catch (error) {
            console.log(error);
            next('Server Error! We will fix this as soon as possible. If you have any questions, send an email at zubeir.mohamed@outlook.de. Thank you ');
        }
    },

    async getPersonalized(req, res, next) {
        try {
            const jobs = await axios(
                {
                    method: 'get',
                    url: `https://jobs.github.com/positions.json?description=${req.query.search}`,
                },
            );
            res.status(200).send(jobs.data);
            next();
        } catch (error) {
            console.log(error);
            next('Server Error! We will fix this as soon as possible. If you have any questions, send an email at zubeir.mohamed@outlook.de. Thank you ');
        }
    },
};
