const contactBook = {

    contacts: [
        {
            name: 'Anastasiia',
            phone: '+380931922738',
            email: 'anast@gmail.com'
        },

        {
            name: 'Max',
            phone: '+380957378899',
            email: 'max@gmail.com'
        }
    ],

    addNewContact(name, phone, email) {
        this.contacts.push({name, phone, email});
    },

    searchContact(name) {
        const foundContact = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        return foundContact
        ? `The contact ${foundContact.name} is found \nPhone: ${foundContact.phone}\nEmail: ${foundContact.email}`
        : `Contact with name ${name} doesn't exist`;
    }
};

function addNewContact() {
    const name = prompt('Enter the name of new contact:');
    const phone = prompt('Enter the phone number:');
    const email = prompt('Enter email of new contact:');
    
    contactBook.addNewContact(name, phone, email);
    alert(`New contact ${name} with phone number ${phone} and email '${email}' successfully added!`);
}

function searchContact() {
    const searchName = prompt('Enter the name for search:');
    const result = contactBook.searchContact(searchName);
    alert(result);
}

const userChoice = prompt("Choose an action (type 1 or 2):\n1. Add a new contact\n2. Search for a contact");

if (userChoice === '1') {
    addNewContact();
} else if (userChoice === '2') {
    searchContact();
} else {
    alert('Invalid choice!');
}