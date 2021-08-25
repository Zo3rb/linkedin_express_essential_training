const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "First Name is Required"]
	},
	lastName: {
		type: String,
		required: [true, "Last Name is Required"]
	},
	email: {
		type: String,
	},
	company: {
		type: String,
	},
	phone: {
		type: Number
	}
}, {
	timestamps: true
});

const ContactModel = mongoose.model("Contact", ContactSchema);

module.exports = ContactModel;
