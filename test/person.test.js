const chai = require('chai');
const expect = chai.expect;
const Person = require("../models/person");

describe("person tests", function() {
    it("should initialize properly", function() {
        const person = new Person("Joe", "Bloggs", "1 Jan 1998");

        expect(person.firstName).to.equal("Joe");
        expect(person.lastName).to.equal("Bloggs");
        expect(person.dob).to.equal("1 Jan 1998");
        expect(person.emails).to.deep.equal([]);
        expect(person.phoneNumbers).to.deep.equal([]);
    });

    it("should capitalise the names", function() {
        const person = new Person("joe", "bloggs");

        expect(person.firstName).to.equal("Joe");
        expect(person.lastName).to.equal("Bloggs");
    });

    it("should return a full name", function() {
        const person = new Person("Joe", "Bloggs");

        expect(person.fullName()).to.equal("Joe Bloggs");
    });

    it("should allow multiple emails to be added", function() {
        const person = new Person("Joe", "Bloggs");

        person.addEmail("joe@bloggs.com");
        person.addEmail("bloggs@joe.com");

        expect(person.emails).to.deep.equal(["joe@bloggs.com", "bloggs@joe.com"]);
    })

    it("should allow multiple phone numbers to be added", function() {
        const person = new Person("Joe", "Bloggs");

        person.addPhoneNumber("0");
        person.addPhoneNumber("1");

        expect(person.phoneNumbers).to.deep.equal(["0", "1"]);
    });

    it("should return a formatted string in the correct format", function() {
        const person = new Person("Joe", "Bloggs", "1 Jan 1990");

        person.addEmail("joe@example.com");
        person.addEmail("joe.bloggs@workexample.com");

        person.addPhoneNumber("07712345678");
        person.addPhoneNumber("07654321987");

        expect(person.getFormattedDetails()).to.equal(`Joe Bloggs
----------
DOB: 1 Jan 1990

Email Addresses:
- joe@example.com
- joe.bloggs@workexample.com

Phone Numbers:
- 07712345678
- 07654321987`);
    });
});