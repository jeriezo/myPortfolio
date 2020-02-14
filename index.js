const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const config = require('config');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const mail = config.get('mailAddress');
const pass = config.get('mailPass')

app.post('/api/form', (req, res) => {
    // console.log(req.body)
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3> contact details</h3>
        <ul>
        <li> Name: ${req.body.fullname}</li>
        <li> Name: ${req.body.email}</li>
        <li> Name: ${req.body.subject}</li>
        <li><h3> Name: ${req.body.message}</h3></li>

        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.mail.yahoo.com',
            port: 465,
            auth: {
                user: mail,
                pass: pass
            }
        })

        let mailOptions = {
            from: req.body.email,
            to: mail,
            replyTo: 'test@testaccount.com',
            subject: 'New message',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }

            console.log('message sent: %s', info.message)
            console.log('message url %s', nodemailer.getTestMessageUrl(info))
        })

    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
    console.log(`server running on port ${PORT}`));