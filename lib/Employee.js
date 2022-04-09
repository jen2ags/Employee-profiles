const inquirer = require('inquirer');

class Employee {
    constructor (name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;


inquirer
.prompt ( {
    type: 'input',
    name: ' name',
    message: "What is the employee's first and last name?"
},
{
    type: 'input',
    name: 'id',
    message: "What is the employee's ID number?"
},
{
    input: 'input',
    name: 'email',
    message: "What is the employee's email address?"
},
{
    type: 'choices',
    name: 'role',
    message: "What is the employee's role in the company?",
    choices: ['Manager', 'Engineer', 'Intern']
},
{
    type: 'input',
    name: 'number',
    message: "What is the manager's office phone number?"
},
{
    type: 'input',
    name: 'github',
    message: "What is the engineer's github username?"
},
{
    type: 'input',
    name: 'school',
    message: "What school is the intern attending?"
}
)