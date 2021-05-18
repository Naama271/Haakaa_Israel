const sgMail = require('@sendgrid/mail')
const sendGridApi = 'SG.Ktt44HLVQN-eIXqJkHMqqg.QOc5qdVEKb4z85zRSrcqLEWGJlAtdVC3CSEVKObhrGc'

sgMail.setApiKey(sendGridApi)

sgMail.send({
    to: 'naama271@gmail.com',
    from: 'naama271@gmail.com',
    subject: 'new contact form',
    text: 'you recived a note'
})

console.log("sent")