function send_email(req, res) {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'coding.aaronp@gmail.com',
        from: req.body.from,
        subject: req.body.subject,
        text: req.body.body,
        html: `<p>${req.body.body}</p>`,
    }
    sgMail.send(msg)
    res.json({ data: {message: ['Your email has been sent, and I\'ll get back to you soon.']}, status: 200 })

}

module.exports = { send_email }
