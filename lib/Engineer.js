const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {

        //super will call from the Employee.js
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;

