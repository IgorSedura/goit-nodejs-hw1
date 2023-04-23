const { listContacts, getContactById, addContact } = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.log(allContacts);
    case "get":
      const oneContact = await getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await addContact({ name, email, phone });
      return console.log(newContact);
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "get", id: "vza2RIzNGIwutCVCs4mCL" });
invokeAction({
  action: "add",
  name: "Ihor",
  email: "ihor@gmail.com",
  phone: "+380971234567",
});
