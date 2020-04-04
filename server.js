
require('dotenv').config();

const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
const log = console.log;
// POST route from contact form


app.post('/contact', (req, res) => {
    // Step 1
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL || '', // TODO: your gmail account
            pass: process.env.PASSWORD || '' // TODO: your gmail password
        }
    });

    // Step 2
    let mailOptions = {
        from: 'abc@gmail.com', // TODO: email sender
        to: 'vartanyan.emanuil@gmail.com', // TODO: email receiver
        subject: 'Nodemailer - Test',
        text: 'Wooohooo it works!!'
    };

    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return log('Error occurs');
        }
        return log('Email sent!!!');
    })

})

