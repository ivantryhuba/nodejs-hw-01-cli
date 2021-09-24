const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const contactsPath = path.join(__dirname, "db", "contacts.json")

async function listContacts() {
  const contacts = await fs.readFile(  contactsPath,"utf-8");
  const result = JSON.parse(contacts);
  
  return result;
}

function getContactById(contactId) {}

function removeContact(contactId) {}

function addContact(name, email, phone) {}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
