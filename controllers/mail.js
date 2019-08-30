const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'zubeir40@googlemail.com',
        clientId: '805142752847-b7chdvsoni8i85609rt3lane66l336fi.apps.googleusercontent.com',
        clientSecret: 'dM9jSlMiIAhsoFHaeEuc1gzg',
        refreshToken: '1/9d85CmEMJTI0k4nZPNRNvHGKf2eK55qTv4yACSFnX6Nl3slt7qn8pCbe9LZwXL-X',
        accessToken: 'ya29.Glt1By9UlGpJdWmdAZohF4Tpr52W7cFpnCaKw4rw-1CAEBt0If5xG1nnZZB71cJUHvWg6IR2yYvWqz1OH-cLs7pFLgKz-eaG5wOPkDZTNvCsZziea2Q9sEoVJITM',
        expires: 1484314697598,
    },
});

module.exports = {
    send(req, res, next) {
        const { email, subject, message } = req.body;

        const mailOptions = {
            from: email,
            to: 'zubeir.mohamed@outlook.de',
            subject,
            text: message,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(400).send('Error sending mail');
                next();
            } else {
                console.log(info);
                res.status(200).send('Successfully sent Email');
                next();
            }
        });
    },
};
