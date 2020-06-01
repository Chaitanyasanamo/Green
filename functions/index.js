
const functions = require('firebase-functions');
const admin = require('firebase-admin');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'senders mail id',
    pass: 'senders password'
  }
});

admin.initializeApp(functions.config().firebase);

const ref = admin.database().ref();

//if user contacts us
exports.sendContactEmail = functions.database
.ref('messages/{msgId}')
.onCreate((snapshot, context) => {
   // Grab the current value of what was written to the Realtime Database.
   const original = snapshot.val();
   var mailOptions = {
    from: 'singh09pratik@gmail.com',
    to: 'chaitanya@plantorium.in',
    subject: 'You have a new query',
    text: `Name: ${original.userName}, Email: ${original.userEmail}, userAddress: ${original.userAddress}, queryDetails: ${original.queryDetails}, phoneNumber: ${original.phoneNumber}`
  };
  console.log(mailOptions.text);
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      return ('Email sent: ' + info.response);
    }
  });
 });
