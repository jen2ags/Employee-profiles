const Employee = require('./Employee.js');


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        //super will call from the Employee,js
        super(name, id, email);
        
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;