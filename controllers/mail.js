const nodemailer = require('nodemailer');
const validator = require('validator');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'zubeir40@googlemail.com',
        clientId: process.env.G_CLIENT_ID,
        clientSecret: process.env.G_CLIENT_SECRET,
        refreshToken: process.env.G_REFRESH_TOKEN,
        accessToken: process.env.G_ACCESS_TOKEN,
        expires: 1484314697598,
    },
});

module.exports = {
    send(req, res, next) {
        const {
            email, subject, message, firstname, lastname,
        } = req.body;
        if (validator.isEmail(email)) {
            const mailOptions = {
                from: email,
                to: 'zubeir.mohamed@outlook.de',
                subject,
                text: `Name: ${firstname}, ${lastname} \n \n ${message}
                `,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    res.status(400).json({ message: 'Error sending mail' });
                    next();
                } else {
                    console.log(info);
                    res.status(200).json({ message: 'Successfully sent e-mail' });
                    next();
                }
            });
        } else {
            res.status(400).send('Error, invalid email');
            next();
        }
    },
};
