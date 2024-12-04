require('dotenv').config();
const nodemailer = require('nodemailer');

const mailSender = async (email, title, body, data) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
                h1 {
                    color: red;
                }
                p {
                    margin-bottom: 20px;
                    color: #666;
                }
                .otp {
                    font-size: 36px;
                    color: #7b68ee;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>OTP Verification</h1>
                <p>Hello ${data.name}, your One-Time Password (OTP) for account verification is:</p>
                <p class="otp">${data.otp}</p>
            </div>
        </body>
        </html>`;

        const info = await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: email,
            subject: title,
            html
        });

        console.log('Email sent: ', info.messageId);
        return info;
    } catch (error) {
        console.error('Error while sending mail (mailSender):', error);
        throw new Error('Failed to send email');
    }
};

module.exports = mailSender;













// const nodemailer = require('nodemailer');


// const mail_user = 'donotreply.brightpath@gmail.com'
// const mail_pass = 'lwyeqpistbffllcx'

// const mailSender = async (email, title, body) => {np
//     try {
//         const transporter = nodemailer.createTransport({
//             host: 'smtp.gmail.com',
//             // auth: {
//             //     user: process.env.MAIL_USER,
//             //     pass: process.env.MAIL_PASS
//             // }
//             auth: {
//                 user: mail_user ,
//                 pass: mail_pass
//             }
//         });


//         const html = `<!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>OTP Verification</title>
//             <style>
//                 body {
//                     font-family: Arial, sans-serif;
//                     margin: 0;
//                     padding: 0;
//                     display: flex;
//                     justify-content: center;
//                     align-items: center;
//                     height: 100vh;
//                 }
//                 .container {
//                     background-color: #fff;
//                     padding: 20px;
//                     border-radius: 8px;
//                     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//                     text-align: center;
//                 }
//                 h1 {
//                     color: red;
//                 }
//                 p {
//                     margin-bottom: 20px;
//                     color: #666;
//                 }
//                 .otp {
//                     font-size: 36px;
//                     color: #7b68ee; /* Purple text */
//                     margin-bottom: 30px;
//                 }
//             </style>
//         </head>
//         <body>
//             <div class="container">
//                 <h1>OTP Verification</h1>
//                 <p>Hello ${data.name} your (One-Time Password) for your account verification is.</p>
//                 <p class="otp">${data.otp}</p> 
//             </div>
//         </body>
//         </html>
//         `;




//         const info = await transporter.sendMail({
//             from: mail_user,
//             to: email,
//             subject,
//             html
//         });

//         console.log('Info of sent mail - ', info);
//         return info;
//     }
//     catch (error) {
//         console.log('Error while sending mail (mailSender) - ', email);
//     }
// }

// module.exports = mailSender;

