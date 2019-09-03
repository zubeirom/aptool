const axios = require('axios');

module.exports = {
    async get(req, res, next) {
        try {
            if (req.query.keywords || req.query.location) {
                // const query = `search=${req.query.keywords}&location=${req.query.location}`;
                const jobs = await axios(
                    {
                        method: 'get',
                        url: 'https://jobs.github.com/positions.json?description=node&location=mannheim',
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
};
