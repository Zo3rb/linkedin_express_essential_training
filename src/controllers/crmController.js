const CRMModel = require('../models/crmModel');
const asyncHandler = require('express-async-handler');

exports.createContact = asyncHandler(async (req, res) => {
	const newContact = await CRMModel.create(req.body);

	res.status(201).json({
		message: "a New Contact was Added Successfully",
		data: newContact
	});
});

exports.indexContacts = asyncHandler(async (req, res) => {
	const contacts = await CRMModel.find({});

	if (!contacts.length) {
		return res.json({
			message: "Successfully Fetched Query But it Seems No Contacts Yet"
		});
	}

	res.json({
		message: "Successfully Fetched The Contacts",
		count: contacts.length,
		data: contacts
	});
});

exports.getContact = asyncHandler(async (req, res) => {
	const contact = await CRMModel.findById(req.params.contactID);

	if (!contact) {
		return res.status(404).json({
			message: "Contact is Not Found .. Please Try Again"
		});
	} 

	res.status(200).json({
		message: "Successfully Fetched a Contact from The Database",
		data: contact
	});
});


exports.updateContact = asyncHandler(async (req, res) => {
	const contact = await CRMModel.findByIdAndUpdate(req.params.contactID, req.body, {new: true});

	if (!contact) {
		return res.status(404).json({
			message: "Contact is Not Found .. Please Try Again"
		});
	}

	res.status(200).json({
		message: "Successfully Updated a Contact",
		data: contact
	});
});

exports.deleteContact = asyncHandler(async (req, res) => {
	const contact = await CRMModel.findByIdAndDelete(req.params.contactID);

	if (!contact) {
		return res.status(404).json({
			message: "Contact is Not Found .. Please Try Again"
		});
	}

	res.status(200).json({
		message: "Successfully Deleted a Contact"
	});
});
