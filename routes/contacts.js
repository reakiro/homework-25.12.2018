var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'platypusdarina@gmail.com',
    pass: 'Dfyzcfafhjd2'
  }
});

/* GET contacts page. */
router.get('/', function(req, res, next) {
  res.render('contacts', { title: 'contacts' });
});

router.post('/', function(req, res) {
	var name = req.body.name;
	var number = req.body.number;
	var email = req.body.email;

	var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: 'email@gmail.com',
	    pass: 'pass'
	  }
	});

	var mailOptions = {
	  from: 'email@gmail.com',
	  to: 'email@gmail.com',
	  subject: 'data from superexpresswebsite',
	  text: 'name: ' + name + '\nnumber: ' + number + '\nemail: ' + email
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	});
	
	res.redirect('/contacts');
});

module.exports = router;