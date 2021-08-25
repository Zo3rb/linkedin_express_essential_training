const express = require("express");
const crmController = require('../controllers/crmController');

const router = express.Router();

// Create Operation
router.post('/contacts', crmController.createContact);

// Read All (Indexing) Operation
router.get("/contacts", crmController.indexContacts);

// Read Operation
router.get("/contacts/:contactID", crmController.getContact);

// Update Operation
router.put("/contacts/:contactID", crmController.updateContact);

// Delete Opertaion
router.delete("/contacts/:contactID", crmController.deleteContact);

module.exports = router;
