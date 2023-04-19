const { listContacts, getContactById } = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.log(allContacts);
    case "get":
      const oneContact = await getContactById(id);
      return console.log(oneContact);
  }
};

// invokeAction({ action: "read" });
invokeAction({ action: "get", id: "vza2RIzNGIwutCVCs4mCL" });
