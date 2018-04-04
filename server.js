const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const keys = require('./config/keys');
const request = require('request');
const app = express();
// Send every request to the React app
// Define any API routes before this runs
app.use(bodyParser.json());

app.post('/api/sendmail', (req, res) => {
  const { firstname, lastname, email, company, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    service: 'gmail',
    auth: {
      user: keys.userGmail,
      pass: keys.passGmail
    }
  });
  const sender = {
    name: `New Message- ${firstname} ${lastname}`,
    address: email
  };
  const mailOptions = {
    from: sender,
    to: 'kmitchell@limitless-estates.com',
    cc: ['lpatipaksiri@limitless-estates.com', 'aitech9188@gmail.com'],
    subject: `Contact Form- ${firstname}`,
    html: `
      <html>
      <head>
      </head>
      <body style="text-align: left;">
        <div style="border-bottom": 1px solid black;">
        <h4>First and Last Name:  ${firstname} ${lastname}</h4>
     
        <h4>Company (optional): ${company}</h4>
        <h4>Email: ${email}</h4>
        <h4>Message:</h4>
        </div>
        <p style="margin-top: 10px">${message}</p>
      </body>
      </html>
    `
  };
  transporter.sendMail(mailOptions);
  res.send('complete');
});

app.post('/api/questionnaire', (req, res) => {
  const {
    fullname,
    email,
    phone,
    accreditedInvestor,
    q1,
    q2,
    q3,
    q4IRR,
    q4ARP,
    q4CoC,
    q5,
    q6,
    q10,
    q11,
    q12,
    q13,
    q14,
    proofOfFunds,
    contactPreference,
    riskTolerance
  } = req.body;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    service: 'gmail',
    auth: {
      user: keys.userGmail,
      pass: keys.passGmail
    }
  });
  /*
preferedFormof Contact: {contactPreference}
q7 : {accreditedInvestor}
q8 : {proofOfFunds}
q9 : risk {riskTolerance}
*/
  const sender = {
    name: `Investor Qualifier- ${fullname}`,
    address: email
  };
  const mailOptions = {
    from: sender,
    to: 'kmitchell@limitless-estates.com',
    cc: ['lpatipaksiri@limitless-estates.com', 'aitech9188@gmail.com'],
    subject: `Investor Questionnaire - ${fullname}`,
    html: `
      <html>
      <head>
      <style>
      html {
        margin:0;
        padding:0;
        height: 100%;
      }
      /* source: http://typecast.com/images/uploads/modernscale.css */
      body {
        font-size: 100%;
        font-family: 'Roboto', sans-serif;
      }
      
      body,
      caption,
      th,
      td,
      input,
      textarea,
      select,
      option,
      legend,
      fieldset,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        
        font-size-adjust: 0.5;
      }
      
      </style>
      </head>
      <body style="text-align: left; font-size: 1em;">
        <div style="border-bottom": 1px solid black;">
          <h4>Name: ${fullname}</h4>
          <h4>Email Address: ${email}</h4>
          <h4>Phone Number: ${phone}</h4>
          <h4>Preferred Form of Contact: <span>${contactPreference}</span></h4>
          </div>
        <p style="margin-top: 10px">1. <span>${q1}</span></p>
        <p>2. <span>${q2}</span></p>
        <p>3. <span>${q3}</span></p>
        <p>4a. Annual return: <span>${q4IRR}</span></p>
        <p>4b. Internal rate of return (IRR): <span>${q4ARP}</span></p>
        <p>4c. Cash on cash return: <span>${q4CoC}</span></p>
        <p>5. <span>${q5}</span></p>
        <p>6. <span>${q6}</span></p>
        <p>7. Accredited Investor: ${accreditedInvestor}</p>
        <p>8. Show proof of funds: ${proofOfFunds}</p>
        <p>9. Risk Tolerance Rating: <span>${riskTolerance}</span></p>
        <p>10. <span>${q10}</span></p>
        <p>11. <span>${q11}</span> </p>
        <p>12.  <span>${q12}</span></p>
        <p>13. <span> ${q13}</span></p>
        <p>14.  <span>${q14}</span></p>
      </body>
      </html>
    `
  };

  transporter.sendMail(mailOptions);
  res.send('complete');
});
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.use(express.static('client/public'));
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
