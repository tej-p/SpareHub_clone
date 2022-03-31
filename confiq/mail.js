const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 587,
	secure: false, // true for 465, false for other ports
	auth: {
		user: "e7eca6d2defa91", // generated ethereal user
		pass: "708dd2dd5bf07f", // generated ethereal password
	}
});