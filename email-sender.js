let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
auth: {
    user: 'dalhoumifatmazahra320@gmail.com',
    pass: 'yourpassword'}
});
let mailOptions = {
from: 'dalhoumifatmazahra320@gmail.com',
to: 'dalhoumifatmazahra320@gmail.com',
subject: 'Sending Email using Node.js',
text: 'That was easy!'
};
transporter.sendMail(mailOptions, function(error, info){
if (error) {
    console.log(error);
} else {
    console.log('Email sent: ' + info.response);
}
});