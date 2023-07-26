const nodemailer = require("nodemailer");


module.exports =  async function sendMail (data) {
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "0c4b8c552ec266",
          pass: "65f8d2d87c65ae"
        }
      });
    
    let message = {
          from: 'web@example.com',
          to: 'web@example.com',
          subject: 'Notification mail;',
          text: `Hello Nikhil`,
          html: `<p>Hello <b> Nikhil</b></p>`
    }
    const info = await transport.sendMail(message)
    
    console.log(`Message send successfully ${info}`);
}
