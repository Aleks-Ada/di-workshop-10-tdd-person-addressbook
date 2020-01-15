function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
}

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = capitalize(firstName);
        this.lastName = capitalize(lastName);
        this.dob = dob;
        this.emails = [];
        this.phoneNumbers = [];
    }

    addEmail(email) {
        this.emails.push(email);
    }

    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber);
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getFormattedDetails() {
        return `${this.fullName()}\n----------\nDOB: ${this.dob}\n\nEmail Addresses:\n- ${this.emails.join("\n- ")}\n\nPhone Numbers:\n- ${this.phoneNumbers.join("\n- ")}`;
    }
}

module.exports = Person;