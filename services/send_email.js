// require('dotenv').config()
// // using SendGrid's v3 Node.js Library
// // https://github.com/sendgrid/sendgrid-nodejs
// const send_email = (req, res) => {
//
//     const sgMail = require('@sendgrid/mail');
//     sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//     const msg = {
//       to: 'coding.aaronp@gmail.com',
//       from: 'test@example.com',
//       subject: 'Sending with SendGrid is Fun',
//       text: 'and easy to do anywhere, even with Node.js',
//       html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//     };
//     console.log('SENDING EMAIL')
//     sgMail.send(msg)
//         .then(res => console.log(res))
//         // .then(res => console.log(res))
//         .catch((err)=> console.log(err))
// }
// module.exports = { send_email }



var helper = require('sendgrid').mail;
require("dotenv")

function validateEmail(email) {
    const tests = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return tests.test(email)
}
function validateText(text, min = 2) {
    return (
        text.length >= min &&          // Too short
        typeof text === "string"    // Not a string
    )
}

function send_email(req, res) {
    let from = req.body.from
    let to = 'coding.aaronp@gmail.com'
    let subject = req.body.subject
    let body = req.body.body
    console.log("Sending email from: " + from + " to: " + to)
    console.log('subject', subject)
    console.log('body', body)
    const fromEmail = new helper.Email(from);
    const toEmail = new helper.Email(to);
    const content = new helper.Content('text/plain', body);
    const mail = new helper.Mail(fromEmail, subject, toEmail, content);

    var sg = require('sendgrid')(process.env.SENDGRID_API);
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });

    sg.API(request, function (error, response) {
        if (error) {
            console.log('Error response received');
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
        }
        console.log("Sent mail: ")
        console.log(response.body)
    })
}

module.exports = { send_email }
